"""Обработка формы обратной связи детского сада МБДОУ ДС №47 'Успех'"""
import json
import os
import urllib.parse as up
import pg8000.native


def get_conn():
    r = up.urlparse(os.environ["DATABASE_URL"])
    return pg8000.native.Connection(
        user=up.unquote(r.username),
        password=up.unquote(r.password),
        host=r.hostname,
        port=r.port or 5432,
        database=r.path.lstrip("/"),
    )


def handler(event: dict, context) -> dict:
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    if event.get("httpMethod") == "POST":
        body = json.loads(event.get("body") or "{}")
        name = body.get("name", "").strip()
        phone = body.get("phone", "").strip()
        email = body.get("email", "").strip()
        message = body.get("message", "").strip()

        if not name or not message:
            return {
                "statusCode": 400,
                "headers": headers,
                "body": json.dumps({"error": "Укажите имя и сообщение"}),
            }

        def esc(s):
            return s.replace("'", "''")

        conn = get_conn()
        rows = conn.run(
            f"INSERT INTO contacts (name, phone, email, message) VALUES ('{esc(name)}', '{esc(phone)}', '{esc(email)}', '{esc(message)}') RETURNING id"
        )
        new_id = rows[0][0]
        conn.close()

        return {
            "statusCode": 200,
            "headers": headers,
            "body": json.dumps({"success": True, "id": new_id}),
        }

    if event.get("httpMethod") == "GET":
        conn = get_conn()
        rows = conn.run("SELECT id, name, phone, email, message, created_at FROM contacts ORDER BY created_at DESC LIMIT 50")
        conn.close()
        result = [{"id": r[0], "name": r[1], "phone": r[2], "email": r[3], "message": r[4], "created_at": str(r[5])} for r in rows]
        return {"statusCode": 200, "headers": headers, "body": json.dumps(result)}

    return {"statusCode": 405, "headers": headers, "body": json.dumps({"error": "Method not allowed"})}