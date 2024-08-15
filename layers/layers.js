var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Adm_RT_RW_Kel_Pasirkaliki_1 = new ol.format.GeoJSON();
var features_Adm_RT_RW_Kel_Pasirkaliki_1 = format_Adm_RT_RW_Kel_Pasirkaliki_1.readFeatures(json_Adm_RT_RW_Kel_Pasirkaliki_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adm_RT_RW_Kel_Pasirkaliki_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adm_RT_RW_Kel_Pasirkaliki_1.addFeatures(features_Adm_RT_RW_Kel_Pasirkaliki_1);
var lyr_Adm_RT_RW_Kel_Pasirkaliki_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Adm_RT_RW_Kel_Pasirkaliki_1, 
                style: style_Adm_RT_RW_Kel_Pasirkaliki_1,
                popuplayertitle: "Adm_RT_RW_Kel_Pasirkaliki",
                interactive: true,
                title: '<img src="styles/legend/Adm_RT_RW_Kel_Pasirkaliki_1.png" /> Adm_RT_RW_Kel_Pasirkaliki'
            });
var format_TitikJentikAedesSp_2 = new ol.format.GeoJSON();
var features_TitikJentikAedesSp_2 = format_TitikJentikAedesSp_2.readFeatures(json_TitikJentikAedesSp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikJentikAedesSp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikJentikAedesSp_2.addFeatures(features_TitikJentikAedesSp_2);
var lyr_TitikJentikAedesSp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikJentikAedesSp_2, 
                style: style_TitikJentikAedesSp_2,
                popuplayertitle: "Titik Jentik Aedes Sp.",
                interactive: true,
                title: '<img src="styles/legend/TitikJentikAedesSp_2.png" /> Titik Jentik Aedes Sp.'
            });
var format_Buffering_3 = new ol.format.GeoJSON();
var features_Buffering_3 = format_Buffering_3.readFeatures(json_Buffering_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffering_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffering_3.addFeatures(features_Buffering_3);
var lyr_Buffering_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffering_3, 
                style: style_Buffering_3,
                popuplayertitle: "Buffering",
                interactive: true,
                title: '<img src="styles/legend/Buffering_3.png" /> Buffering'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_Adm_RT_RW_Kel_Pasirkaliki_1.setVisible(true);lyr_TitikJentikAedesSp_2.setVisible(true);lyr_Buffering_3.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_Adm_RT_RW_Kel_Pasirkaliki_1,lyr_TitikJentikAedesSp_2,lyr_Buffering_3];
lyr_Adm_RT_RW_Kel_Pasirkaliki_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_TitikJentikAedesSp_2.set('fieldAliases', {'Name': 'Name', 'timestamp': 'timestamp', });
lyr_Buffering_3.set('fieldAliases', {'Name': 'Name', });
lyr_Adm_RT_RW_Kel_Pasirkaliki_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_TitikJentikAedesSp_2.set('fieldImages', {'Name': 'TextEdit', 'timestamp': 'TextEdit', });
lyr_Buffering_3.set('fieldImages', {'Name': 'TextEdit', });
lyr_Adm_RT_RW_Kel_Pasirkaliki_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_TitikJentikAedesSp_2.set('fieldLabels', {'Name': 'no label', 'timestamp': 'no label', });
lyr_Buffering_3.set('fieldLabels', {'Name': 'no label', });
lyr_Buffering_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});