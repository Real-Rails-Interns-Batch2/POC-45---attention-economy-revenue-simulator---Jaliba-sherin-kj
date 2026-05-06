path = r'C:\Users\admin\.gemini\antigravity\brain\3db7c708-e114-439d-a4bb-79af18208824\.system_generated\logs\overview.txt'
with open(path, 'r', encoding='utf-8') as f: lines = f.readlines()

def restore(search, end_search, out_file):
    for line in lines:
        if search in line and 'write_to_file' in line:
            idx1 = line.find('CodeContent":"')
            if idx1 != -1:
                idx2 = line.find('","Description"', idx1)
                if idx2 != -1:
                    raw = line[idx1 + 14:idx2]
                    # We have multiple layers of JSON escaping. We can decode the JSON string twice.
                    import json
                    try:
                        val = json.loads(raw)
                        val = json.loads(val)
                        with open('app/' + out_file, 'w', encoding='utf-8') as out:
                            out.write(val)
                        print('Restored', out_file)
                    except Exception as e:
                        print('JSON Error', e)
                        # Fallback
                        val = raw.replace('\\\\n', '\n').replace('\\\"', '"').replace('\\\\', '\\')
                        if val.startswith('"'): val = val[1:]
                        if val.endswith('"'): val = val[:-1]
                        with open('app/' + out_file, 'w', encoding='utf-8') as out:
                            out.write(val)
                        print('Restored (fallback) ', out_file)
            return

restore('page.tsx', '', 'page.tsx')
restore('globals.css', '', 'globals.css')
restore('layout.tsx', '', 'layout.tsx')
