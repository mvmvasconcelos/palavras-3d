import os
import json

MODELS_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "models")

def get_all_models():
    """
    Scans the models/ directory and returns a list of dictionaries
    with the config.json data for each valid model.
    """
    models = []
    if not os.path.exists(MODELS_DIR):
        return models
        
    for item in os.listdir(MODELS_DIR):
        model_path = os.path.join(MODELS_DIR, item)
        if os.path.isdir(model_path):
            config_path = os.path.join(model_path, "config.json")
            if os.path.exists(config_path):
                try:
                    with open(config_path, 'r', encoding='utf-8') as f:
                        config = json.load(f)
                        # Ensure ID matches the folder name
                        config["id"] = item
                        models.append(config)
                except Exception as e:
                    print(f"Error loading config for model {item}: {e}")
                    
    return models

def get_model_config(model_id):
    """
    Returns the config.json dictionary for a specific model_id.
    """
    config_path = os.path.join(MODELS_DIR, model_id, "config.json")
    if os.path.exists(config_path):
        try:
            with open(config_path, 'r', encoding='utf-8') as f:
                config = json.load(f)
                config["id"] = model_id
                return config
        except Exception as e:
            print(f"Error loading config for model {model_id}: {e}")
    return None

def get_model_scad_path(model_id):
    """
    Returns the absolute path to the model.scad file for a specific model_id.
    """
    scad_path = os.path.join(MODELS_DIR, model_id, "model.scad")
    if os.path.exists(scad_path):
        return scad_path
    return None
