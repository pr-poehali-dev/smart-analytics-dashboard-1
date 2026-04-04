import os
import json
import requests

TWITCH_USERNAME = "artem_maybach"
STEAM_ID = "76561199798396081"
ETS2_APP_ID = "227300"


def get_twitch_token():
    resp = requests.post("https://id.twitch.tv/oauth2/token", params={
        "client_id": os.environ["TWITCH_CLIENT_ID"],
        "client_secret": os.environ["TWITCH_CLIENT_SECRET"],
        "grant_type": "client_credentials"
    })
    return resp.json()["access_token"]


def get_stream_status(token):
    resp = requests.get("https://api.twitch.tv/helix/streams", params={
        "user_login": TWITCH_USERNAME
    }, headers={
        "Client-ID": os.environ["TWITCH_CLIENT_ID"],
        "Authorization": f"Bearer {token}"
    })
    data = resp.json().get("data", [])
    if data:
        stream = data[0]
        return {
            "live": True,
            "title": stream.get("title", ""),
            "viewers": stream.get("viewer_count", 0)
        }
    return {"live": False, "title": "", "viewers": 0}


def get_convoy_players():
    resp = requests.get("https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/", params={
        "key": os.environ["STEAM_API_KEY"],
        "appid": ETS2_APP_ID
    })
    data = resp.json().get("response", {})
    return data.get("player_count", 0)


def handler(event: dict, context) -> dict:
    """Возвращает статус Twitch стрима и количество игроков в ETS2"""
    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Max-Age": "86400"
            },
            "body": ""
        }

    token = get_twitch_token()
    stream = get_stream_status(token)
    players = get_convoy_players()

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps({
            "stream": stream,
            "convoy_players": players
        })
    }
