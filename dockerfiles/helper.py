#!/usr/bin/python3
"""Addon support for Volto."""
from pathlib import Path

import json
import logging
import os


logger = logging.getLogger("Volto Helper")


APP_FOLDER = Path("/app").resolve()
PACKAGE_JSON_PATH = (APP_FOLDER / "package.json").resolve()
JSCONFIG_PATH = (APP_FOLDER / "jsconfig.json").resolve()


ADDONS = os.environ.get("PB_ADDONS", "")
WORKSPACES = os.environ.get("PB_WORKSPACES", "")
THEME = os.environ.get("PB_THEME", "")


def add_packages_to_package_json(config: dict, addons: list, workspaces: list, theme: str) -> dict:
    """Add addons to the main `package.json`."""
    addons_ = config.get("addons", [])
    workspaces_ = config.get("workspaces", [])
    for addon in addons:
        addons_.append(addon)
    for workspace in workspaces:
        workspaces_.append(workspace)
    config["addons"] = addons_
    config["workspaces"] = workspaces_
    config["theme"] = theme
    return config


if ADDONS:
    logger.info("Processing the ADDONS variable.")
    addons = ADDONS.split(",")
    workspaces = WORKSPACES.split(",")
    package_json = add_packages_to_package_json(
        json.load(open(PACKAGE_JSON_PATH)),
        addons,
        workspaces,
        THEME
    )
    json.dump(package_json, open(PACKAGE_JSON_PATH, "w"), indent=2)
