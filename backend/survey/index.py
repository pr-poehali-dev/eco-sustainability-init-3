"""Анкета 'Карта ресурсов семьи' — МБДОУ ДС №47 'Успех'"""
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
        child_name = body.get("child_name", "").strip()
        parent_name = body.get("parent_name", "").strip()
        group_name = body.get("group_name", "").strip()
        strengths = body.get("strengths", "").strip()
        barriers = body.get("barriers", "").strip()
        interests = body.get("interests", "").strip()

        if not child_name or not parent_name or not strengths or not barriers or not interests:
            return {
                "statusCode": 400,
                "headers": headers,
                "body": json.dumps({"error": "Заполните все обязательные поля"}),
            }

        def esc(s):
            return s.replace("'", "''")

        conn = get_conn()
        rows = conn.run(
            f"INSERT INTO family_surveys (child_name, parent_name, group_name, strengths, barriers, interests) VALUES ('{esc(child_name)}', '{esc(parent_name)}', '{esc(group_name)}', '{esc(strengths)}', '{esc(barriers)}', '{esc(interests)}') RETURNING id"
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
        rows = conn.run(
            "SELECT id, child_name, parent_name, group_name, strengths, barriers, interests, created_at FROM family_surveys ORDER BY created_at DESC LIMIT 100"
        )
        conn.close()
        result = [
            {"id": r[0], "child_name": r[1], "parent_name": r[2], "group_name": r[3],
             "strengths": r[4], "barriers": r[5], "interests": r[6], "created_at": str(r[7])}
            for r in rows
        ]
        return {"statusCode": 200, "headers": headers, "body": json.dumps(result)}

    return {"statusCode": 405, "headers": headers, "body": json.dumps({"error": "Method not allowed"})}