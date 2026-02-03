import os
import subprocess
import sys

# --- Configuration ---
OPENSCAD_PATH = r"C:\Program Files\OpenSCAD\openscad.exe"
SCAD_FILE = "name_topper.scad"
OUTPUT_DIR = "output"

# List of names to generate
# Format: (NameString, OptionalOverrideDict)
NAMES_TO_GENERATE = [
    ("Vinicius", {}),
    ("Bambu", {"base_color": "#00FF00"}), # Example of color override (affects preview only)
    ("Maker", {}),
]

# Default settings that can be overridden per name if needed
DEFAULT_SETTINGS = {
    # You can add overrides here that apply to all, e.g.:
    # "font_name": "Arial:style=Bold",
}

def check_openscad():
    if not os.path.exists(OPENSCAD_PATH):
        print(f"Error: OpenSCAD not found at {OPENSCAD_PATH}")
        print("Please install OpenSCAD or update the OPENSCAD_PATH in this script.")
        return False
    return True

def generate_stl(name, overrides=None):
    if overrides is None:
        overrides = {}
    
    # Merge defaults with overrides
    settings = DEFAULT_SETTINGS.copy()
    settings.update(overrides)
    settings["text_string"] = name # Ensure name is set
    
    output_filename = os.path.join(OUTPUT_DIR, f"{name}.stl")
    
    # Construct command line arguments
    # -o output.stl : Output file
    # -D var=val : Override variables
    cmd = [OPENSCAD_PATH, "-o", output_filename]
    
    for key, value in settings.items():
        # OpenSCAD relies on correct quoting. 
        # For strings, we need to pass them as '"value"' to the shell/OpenSCAD.
        if isinstance(value, str):
            val_str = f'"{value}"' 
        elif isinstance(value, bool):
            val_str = "true" if value else "false"
        else:
            val_str = str(value)
            
        cmd.append("-D")
        cmd.append(f'{key}={val_str}')
    
    cmd.append(SCAD_FILE)
    
    print(f"Generating {output_filename}...")
    try:
        subprocess.run(cmd, check=True, capture_output=True)
        print(f"Successfully generated {output_filename}")
    except subprocess.CalledProcessError as e:
        print(f"Failed to generate {output_filename}")
        print("Error output:", e.stderr.decode())

def main():
    if not check_openscad():
        return

    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        
    print(f"Starting generation for {len(NAMES_TO_GENERATE)} names...")
    
    for name_data in NAMES_TO_GENERATE:
        if isinstance(name_data, tuple):
            name, overrides = name_data
        else:
            name = name_data
            overrides = {}
            
        generate_stl(name, overrides)

    print("All done!")

if __name__ == "__main__":
    main()
