import sys
import re
import ast

path = r'C:\Users\admin\.gemini\antigravity\brain\3db7c708-e114-439d-a4bb-79af18208824\.system_generated\logs\overview.txt'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

def restore(search_str, end_str, target):
    idx1 = text.find(search_str)
    if idx1 != -1:
        idx2 = text.find(end_str, idx1)
        if idx2 != -1:
            raw_val = text[idx1 + len('"CodeContent":"'):idx2]
            try:
                # Need to use literal_eval properly
                val = ast.literal_eval('"' + raw_val.replace('"', '\\"') + '"')
                # Actually, the raw string is a JSON encoded string. Let's try json.loads instead of ast.
                import json
                try:
                    val = json.loads('"' + raw_val + '"')
                    val = json.loads(val)
                except:
                    # fallback
                    val = raw_val.replace('\\n', '\n').replace('\\"', '"').replace('\\\\', '\\')
                
                with open('app/' + target, 'w', encoding='utf-8') as out:
                    out.write(val)
                print('Restored', target)
            except Exception as e:
                print('Error evaluating', target, e)
                # Fallback simple replacement
                val = raw_val.replace('\\n', '\n').replace('\\"', '"').replace('\\\\', '\\')
                with open('app/' + target, 'w', encoding='utf-8') as out:
                    out.write(val)
                print('Restored (fallback) ', target)
        else:
            print('Could not find end for', target)
    else:
        print('Could not find start for', target)

restore('"CodeContent":"\\"use client\\";\\n\\nimport { useState', '","Description":"\\"Main dashboard page', 'page.tsx')
restore('"CodeContent":"@import url(\\"https://fonts.googleapis.com', '","Description":"\\"Initialized global styles', 'globals.css')
restore('"CodeContent":"import \\"./globals.css\\";\\nimport type', '","Description":"\\"Created root layout', 'layout.tsx')
