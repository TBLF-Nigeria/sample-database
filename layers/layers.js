var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_rivers_address_2_1 = new ol.format.GeoJSON();
var features_rivers_address_2_1 = format_rivers_address_2_1.readFeatures(json_rivers_address_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rivers_address_2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rivers_address_2_1.addFeatures(features_rivers_address_2_1);
var lyr_rivers_address_2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rivers_address_2_1, 
                style: style_rivers_address_2_1,
                interactive: true,
                title: '<img src="styles/legend/rivers_address_2_1.png" /> rivers_address_2'
            });

lyr_OSMStandard_0.setVisible(true);lyr_rivers_address_2_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_rivers_address_2_1];
lyr_rivers_address_2_1.set('fieldAliases', {'_uid_': 'ID', 'osm_id': 'osm_id', 'feature': 'feature', 'name': 'name', 'type': 'type', 'year_built': 'year_built', 'place_id': 'place_id', 'location_t': 'location_t', 'latitude': 'latitude', 'longitude': 'longitude', 'address': 'address', 'postal_code': 'postal_code', 'street_name': 'street_name', 'town': 'town', 'city': 'city', 'state': 'state', 'country': 'country', });
lyr_rivers_address_2_1.set('fieldImages', {'_uid_': 'TextEdit', 'osm_id': 'Hidden', 'feature': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'year_built': 'Range', 'place_id': 'Hidden', 'location_t': 'Hidden', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'address': 'Hidden', 'postal_code': 'TextEdit', 'street_name': 'TextEdit', 'town': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'country': 'TextEdit', });
lyr_rivers_address_2_1.set('fieldLabels', {'_uid_': 'inline label', 'feature': 'inline label', 'name': 'inline label', 'type': 'inline label', 'year_built': 'inline label', 'latitude': 'inline label', 'longitude': 'inline label', 'postal_code': 'inline label', 'street_name': 'inline label', 'town': 'inline label', 'city': 'inline label', 'state': 'inline label', 'country': 'inline label', });
lyr_rivers_address_2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});