import bpy # type: ignore
import json
from pathlib import Path

def export_mmd_material_settings():
    obj = bpy.data.objects['星穹铁道—昔涟5_mesh']
    
    mmd_material_settings = {}
    
    for slot in obj.material_slots:
        mat = slot.material
        mmd_material_settings[mat.name] = {
            "blend_method": mat.blend_method,
            "use_backface_culling": mat.use_backface_culling
        }
    
    base_dir = Path(bpy.data.filepath).parent
    output_path = base_dir / "mmd_material_settings.json"

    with open(output_path, "w") as f:
        json.dump(mmd_material_settings, f, indent=4)

export_mmd_material_settings()
