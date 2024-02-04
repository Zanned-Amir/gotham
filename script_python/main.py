import folium
from folium.plugins import HeatMap
import random

mapObj = folium.Map(location=[36.7992, 10.1803], title="Stamen Terrain", zoom_start=13, control_scale=True)

data = [[random.uniform(36.7, 36.9), random.uniform(10.0, 10.4), random.randint(2, 4)] for _ in range(100)]

mapData = [[x[0], x[1], x[2]] for x in data]

def get_color_for_type(type_value):
    if type_value == 2:
        return 'blue'
    elif type_value == 3:
        return 'orange'
    elif type_value == 4:
        return 'red'
    else:
        return 'gray'

# Assign colors based on the type values
colors = [get_color_for_type(x[2]) for x in data]

HeatMap(mapData, gradient=None, max_opacity=0.7, radius=15, blur=5, colors=colors).add_to(mapObj)
mapObj.save("output.html")


