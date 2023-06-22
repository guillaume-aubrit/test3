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
var format_AURA_Departements_1 = new ol.format.GeoJSON();
var features_AURA_Departements_1 = format_AURA_Departements_1.readFeatures(json_AURA_Departements_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AURA_Departements_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AURA_Departements_1.addFeatures(features_AURA_Departements_1);
var lyr_AURA_Departements_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AURA_Departements_1, 
                style: style_AURA_Departements_1,
                interactive: true,
                title: '<img src="styles/legend/AURA_Departements_1.png" /> AURA_Departements'
            });
var format_AuvergneHabitat_2 = new ol.format.GeoJSON();
var features_AuvergneHabitat_2 = format_AuvergneHabitat_2.readFeatures(json_AuvergneHabitat_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AuvergneHabitat_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AuvergneHabitat_2.addFeatures(features_AuvergneHabitat_2);
var lyr_AuvergneHabitat_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AuvergneHabitat_2, 
                style: style_AuvergneHabitat_2,
                interactive: true,
    title: 'Auvergne Habitat<br />\
    <img src="styles/legend/AuvergneHabitat_2_0.png" /> Segment 2 : Rénover vite de façon industrialisée<br />\
    <img src="styles/legend/AuvergneHabitat_2_1.png" /> Segment 3 : Rénover les passoires thermiques non industrialisables<br />\
    <img src="styles/legend/AuvergneHabitat_2_2.png" /> Segment 4 : Massifier le traitement des logements individuels<br />\
    <img src="styles/legend/AuvergneHabitat_2_3.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_AURA_Departements_1.setVisible(true);lyr_AuvergneHabitat_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_AURA_Departements_1,lyr_AuvergneHabitat_2];
lyr_AURA_Departements_1.set('fieldAliases', {'CODE': 'CODE', 'NOM': 'NOM', 'PSDC': 'PSDC', 'MENAGES': 'MENAGES', 'NBLOG': 'NBLOG', 'CODEREG': 'CODEREG', 'SUPERFICIE': 'SUPERFICIE', 'RP_FouG': 'RP_FouG', });
lyr_AuvergneHabitat_2.set('fieldAliases', {'Nom ou référence de l\'opération': 'Nom ou référence de l\'opération', 'Segmentation': 'Segmentation', 'Date d\'OS Travaux': 'Date d\'OS Travaux', 'Typologie d\'habitat': 'Typologie d\'habitat', 'Nombre d\'étage maximum (R+..)': 'Nombre d\'étage maximum (R+..)', 'Nombre de logements': 'Nombre de logements', 'Année de construction': 'Année de construction', 'Nouvelle étiquette DPE 2020 (si connue)': 'Nouvelle étiquette DPE 2020 (si connue)', 'Mode de chauffage': 'Mode de chauffage', 'Energie de chauffage': 'Energie de chauffage', 'latitude': 'latitude', 'longitude': 'longitude', 'Etiquette': 'Etiquette', 'Nom': 'Nom', });
lyr_AURA_Departements_1.set('fieldImages', {'CODE': 'TextEdit', 'NOM': 'TextEdit', 'PSDC': 'TextEdit', 'MENAGES': 'TextEdit', 'NBLOG': 'TextEdit', 'CODEREG': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'RP_FouG': 'TextEdit', });
lyr_AuvergneHabitat_2.set('fieldImages', {'Nom ou référence de l\'opération': 'TextEdit', 'Segmentation': 'TextEdit', 'Date d\'OS Travaux': 'TextEdit', 'Typologie d\'habitat': 'TextEdit', 'Nombre d\'étage maximum (R+..)': 'TextEdit', 'Nombre de logements': 'Range', 'Année de construction': 'Range', 'Nouvelle étiquette DPE 2020 (si connue)': 'TextEdit', 'Mode de chauffage': 'TextEdit', 'Energie de chauffage': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Etiquette': '', 'Nom': '', });
lyr_AURA_Departements_1.set('fieldLabels', {'CODE': 'no label', 'NOM': 'no label', 'PSDC': 'no label', 'MENAGES': 'no label', 'NBLOG': 'no label', 'CODEREG': 'no label', 'SUPERFICIE': 'no label', 'RP_FouG': 'no label', });
lyr_AuvergneHabitat_2.set('fieldLabels', {'Nom ou référence de l\'opération': 'inline label', 'Segmentation': 'inline label', 'Date d\'OS Travaux': 'no label', 'Typologie d\'habitat': 'no label', 'Nombre d\'étage maximum (R+..)': 'no label', 'Nombre de logements': 'inline label', 'Année de construction': 'inline label', 'Nouvelle étiquette DPE 2020 (si connue)': 'inline label', 'Mode de chauffage': 'inline label', 'Energie de chauffage': 'inline label', 'latitude': 'no label', 'longitude': 'no label', 'Etiquette': 'no label', 'Nom': 'inline label', });
lyr_AuvergneHabitat_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});