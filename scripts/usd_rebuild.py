import bpy # type: ignore
import os
import re
import json
from pathlib import Path

def try_remove_file(file_path):
    if os.path.exists(file_path):
        os.remove(file_path)

def rebuild_usd():
    base_dir = Path(bpy.data.filepath).parent
    settings_path = base_dir / "mmd_material_settings.json"
    
    with open(settings_path, "r") as f:
        mmd_material_settings = json.load(f)

    obj = bpy.data.objects['星穹铁道_昔涟5.001']

    for slot in obj.material_slots:
        mat = slot.material

        mat_setting = mmd_material_settings.get(mat.name)
        if mat_setting is None:
            clean_name = re.sub(r'[+.]', '_', mat.name)
            mat_setting = mmd_material_settings[clean_name]

        mat.blend_method = mat_setting["blend_method"]
        mat.use_backface_culling = mat_setting["use_backface_culling"]

rebuild_usd()
