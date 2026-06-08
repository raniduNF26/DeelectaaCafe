import sys
from PIL import Image

def remove_bg(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        
        # Sample the top-left pixel to get the exact background color
        bg_color = datas[0]
        
        newData = []
        
        for item in datas:
            # Check if pixel is within a strict tolerance of the bg_color
            # We use a tolerance of 15 to catch slight compression artifacts
            if abs(item[0] - bg_color[0]) < 15 and abs(item[1] - bg_color[1]) < 15 and abs(item[2] - bg_color[2]) < 15:
                # Make it transparent
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
                
        img.putdata(newData)
        img.save(output_path, "PNG")
        print("Successfully removed background")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python remove_bg.py <input> <output>")
        sys.exit(1)
    remove_bg(sys.argv[1], sys.argv[2])
