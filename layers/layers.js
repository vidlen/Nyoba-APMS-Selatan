ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11870761.321689, -685897.311932, 11875402.791341, -682984.743124]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_APMSSelatan_1 = new ol.format.GeoJSON();
var features_APMSSelatan_1 = format_APMSSelatan_1.readFeatures(json_APMSSelatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APMSSelatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APMSSelatan_1.addFeatures(features_APMSSelatan_1);
var lyr_APMSSelatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APMSSelatan_1, 
                style: style_APMSSelatan_1,
                popuplayertitle: 'APMS Selatan',
                interactive: true,
    title: 'APMS Selatan<br />\
    <img src="styles/legend/APMSSelatan_1_0.png" /> 0 - 11 Failed<br />\
    <img src="styles/legend/APMSSelatan_1_1.png" /> 11 - 25 Serious<br />\
    <img src="styles/legend/APMSSelatan_1_2.png" /> 26 - 40 Very Poor<br />\
    <img src="styles/legend/APMSSelatan_1_3.png" /> 41 - 55 Poor<br />\
    <img src="styles/legend/APMSSelatan_1_4.png" /> 56 - 70 Fair<br />\
    <img src="styles/legend/APMSSelatan_1_5.png" /> 71 - 85 Satisfactory<br />\
    <img src="styles/legend/APMSSelatan_1_6.png" /> 86 - 100 Good<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_APMSSelatan_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_APMSSelatan_1];
lyr_APMSSelatan_1.set('fieldAliases', {'Taxiway': 'Taxiway', 'PCI Rating': 'PCI Rating', });
lyr_APMSSelatan_1.set('fieldImages', {'Taxiway': 'TextEdit', 'PCI Rating': 'Range', });
lyr_APMSSelatan_1.set('fieldLabels', {'Taxiway': 'inline label - visible with data', 'PCI Rating': 'inline label - visible with data', });
lyr_APMSSelatan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});