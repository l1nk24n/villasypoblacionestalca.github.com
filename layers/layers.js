var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_Canales84_0 = new ol.format.GeoJSON();
var features_Canales84_0 = format_Canales84_0.readFeatures(json_Canales84_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Canales84_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Canales84_0.addFeatures(features_Canales84_0);var lyr_Canales84_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Canales84_0, 
                style: style_Canales84_0,
                title: '<img src="styles/legend/Canales84_0.png" /> Canales84'
            });var format_EJE_1 = new ol.format.GeoJSON();
var features_EJE_1 = format_EJE_1.readFeatures(json_EJE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EJE_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EJE_1.addFeatures(features_EJE_1);var lyr_EJE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EJE_1, 
                style: style_EJE_1,
                title: '<img src="styles/legend/EJE_1.png" /> EJE'
            });var format_Limite_villas_2_2 = new ol.format.GeoJSON();
var features_Limite_villas_2_2 = format_Limite_villas_2_2.readFeatures(json_Limite_villas_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_villas_2_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Limite_villas_2_2.addFeatures(features_Limite_villas_2_2);var lyr_Limite_villas_2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_villas_2_2, 
                style: style_Limite_villas_2_2,
    title: 'Limite_villas_2<br />\
    <img src="styles/legend/Limite_villas_2_2_0.png" /> ABATE, MOLINA<br />\
    <img src="styles/legend/Limite_villas_2_2_1.png" /> Aldea Campesina<br />\
    <img src="styles/legend/Limite_villas_2_2_2.png" /> CHACRA SILVIA<br />\
    <img src="styles/legend/Limite_villas_2_2_3.png" /> COMITÉ HABITACIONAL, ESPERANZA DE MERCEDES<br />\
    <img src="styles/legend/Limite_villas_2_2_4.png" /> COMUNIDAD EL VALLE<br />\
    <img src="styles/legend/Limite_villas_2_2_5.png" /> COMUNIDAD, FUNDO LA PALMA<br />\
    <img src="styles/legend/Limite_villas_2_2_6.png" /> COMUNIDAD, JOSE CARDAY<br />\
    <img src="styles/legend/Limite_villas_2_2_7.png" /> COND. LAS, DELICIAS<br />\
    <img src="styles/legend/Limite_villas_2_2_8.png" /> COND., SEMINARIO<br />\
    <img src="styles/legend/Limite_villas_2_2_9.png" /> CONDOMINIO EL ALTO<br />\
    <img src="styles/legend/Limite_villas_2_2_10.png" /> CONDOMINIO LIRCAY I<br />\
    <img src="styles/legend/Limite_villas_2_2_11.png" /> CONDOMINIO LIRCAY II<br />\
    <img src="styles/legend/Limite_villas_2_2_12.png" /> CONDOMINIO LIRCAY III<br />\
    <img src="styles/legend/Limite_villas_2_2_13.png" /> CONDOMINIO LIRCAY IV<br />\
    <img src="styles/legend/Limite_villas_2_2_14.png" /> CONDOMINIO LIRCAY V<br />\
    <img src="styles/legend/Limite_villas_2_2_15.png" /> CONDOMINIO LIRCAY VI<br />\
    <img src="styles/legend/Limite_villas_2_2_16.png" /> CONJ, DIAGINAL, 2 NORTE<br />\
    <img src="styles/legend/Limite_villas_2_2_17.png" /> CONJ, LOS LAGOS<br />\
    <img src="styles/legend/Limite_villas_2_2_18.png" /> CONJ. 12 NORTE<br />\
    <img src="styles/legend/Limite_villas_2_2_19.png" /> CONJ., 1 OTE., 5 SUR<br />\
    <img src="styles/legend/Limite_villas_2_2_20.png" /> CONJ., 2 OTE., 9 NTE.<br />\
    <img src="styles/legend/Limite_villas_2_2_21.png" /> CONJ., 3 NORTE<br />\
    <img src="styles/legend/Limite_villas_2_2_22.png" /> CONJ., 6 ORIENTE<br />\
    <img src="styles/legend/Limite_villas_2_2_23.png" /> CONJ., 6 OTE., 4 Y 4 SUR<br />\
    <img src="styles/legend/Limite_villas_2_2_24.png" /> CONJ., COLIN SUR<br />\
    <img src="styles/legend/Limite_villas_2_2_25.png" /> CONJ., GRAN, AVENIDA<br />\
    <img src="styles/legend/Limite_villas_2_2_26.png" /> CONJ., GRUPO HAB., BANCO DEL, ESTADO<br />\
    <img src="styles/legend/Limite_villas_2_2_27.png" /> CONJ., LAS HERAS<br />\
    <img src="styles/legend/Limite_villas_2_2_28.png" /> CONJ., LOS, LIBERTADORES<br />\
    <img src="styles/legend/Limite_villas_2_2_29.png" /> CONJ., MARCELO, RIVANO<br />\
    <img src="styles/legend/Limite_villas_2_2_30.png" /> CONJ., PORTAL DE, LOS AGUSTINOS<br />\
    <img src="styles/legend/Limite_villas_2_2_31.png" /> CONJ., RESIDENCIAL, ALAMEDA<br />\
    <img src="styles/legend/Limite_villas_2_2_32.png" /> CONJ., RIO CLARO<br />\
    <img src="styles/legend/Limite_villas_2_2_33.png" /> CONJ., STA. ROSA<br />\
    <img src="styles/legend/Limite_villas_2_2_34.png" /> CONJ., TREGUALEMU<br />\
    <img src="styles/legend/Limite_villas_2_2_35.png" /> CONJUNTO LOMAS DE SAN JOSÉ<br />\
    <img src="styles/legend/Limite_villas_2_2_36.png" /> CONJUNTO RAYEN<br />\
    <img src="styles/legend/Limite_villas_2_2_37.png" /> CONJUNTO, LAS PALMERAS<br />\
    <img src="styles/legend/Limite_villas_2_2_38.png" /> CONJUNTO, LUCÍA HIRIART<br />\
    <img src="styles/legend/Limite_villas_2_2_39.png" /> COOP ACEITAL<br />\
    <img src="styles/legend/Limite_villas_2_2_40.png" /> COOP EL CAMINO<br />\
    <img src="styles/legend/Limite_villas_2_2_41.png" /> COOP MONTE BAEZA<br />\
    <img src="styles/legend/Limite_villas_2_2_42.png" /> COOP, GRECO<br />\
    <img src="styles/legend/Limite_villas_2_2_43.png" /> COOP, LOS ESPINOS<br />\
    <img src="styles/legend/Limite_villas_2_2_44.png" /> COOP, PEHUENCHE<br />\
    <img src="styles/legend/Limite_villas_2_2_45.png" /> COOP, SANTA ELVIRA<br />\
    <img src="styles/legend/Limite_villas_2_2_46.png" /> COOP. 16 DE OCTUBRE<br />\
    <img src="styles/legend/Limite_villas_2_2_47.png" /> COOP. 2 NORTE<br />\
    <img src="styles/legend/Limite_villas_2_2_48.png" /> COOP. BELEN<br />\
    <img src="styles/legend/Limite_villas_2_2_49.png" /> COOP. CIELO AZUL<br />\
    <img src="styles/legend/Limite_villas_2_2_50.png" /> COOP. COSTA AZUL<br />\
    <img src="styles/legend/Limite_villas_2_2_51.png" /> COOP. EL PINAR<br />\
    <img src="styles/legend/Limite_villas_2_2_52.png" /> COOP. ENDESA<br />\
    <img src="styles/legend/Limite_villas_2_2_53.png" /> COOP. FERROVIARIA<br />\
    <img src="styles/legend/Limite_villas_2_2_54.png" /> COOP. FLOR DE CHILE<br />\
    <img src="styles/legend/Limite_villas_2_2_55.png" /> COOP. FRANCISCO ENCINA<br />\
    <img src="styles/legend/Limite_villas_2_2_56.png" /> COOP. HUARAZ<br />\
    <img src="styles/legend/Limite_villas_2_2_57.png" /> COOP. LIRCAY<br />\
    <img src="styles/legend/Limite_villas_2_2_58.png" /> COOP. LOS ANDES<br />\
    <img src="styles/legend/Limite_villas_2_2_59.png" /> COOP. LOS AROMOS<br />\
    <img src="styles/legend/Limite_villas_2_2_60.png" /> COOP. LOS CERRILLOS<br />\
    <img src="styles/legend/Limite_villas_2_2_61.png" /> COOP. LOS DIAMANTES<br />\
    <img src="styles/legend/Limite_villas_2_2_62.png" /> COOP. LOS MAGNOLIOS<br />\
    <img src="styles/legend/Limite_villas_2_2_63.png" /> COOP. LOS NARANJOS<br />\
    <img src="styles/legend/Limite_villas_2_2_64.png" /> COOP. MANUEL FERNÁNDEZ<br />\
    <img src="styles/legend/Limite_villas_2_2_65.png" /> COOP. NUEVA HOLANDA<br />\
    <img src="styles/legend/Limite_villas_2_2_66.png" /> COOP. NUEVA HORIZONTE<br />\
    <img src="styles/legend/Limite_villas_2_2_67.png" /> COOP. PERSONAL, DE FOSFOROS<br />\
    <img src="styles/legend/Limite_villas_2_2_68.png" /> COOP. PIDUCO<br />\
    <img src="styles/legend/Limite_villas_2_2_69.png" /> COOP. REMBRANT<br />\
    <img src="styles/legend/Limite_villas_2_2_70.png" /> COOP. TELETAL<br />\
    <img src="styles/legend/Limite_villas_2_2_71.png" /> COOP. TRALCA<br />\
    <img src="styles/legend/Limite_villas_2_2_72.png" /> COOP. TREINTAL<br />\
    <img src="styles/legend/Limite_villas_2_2_73.png" /> COOP., 2 DE ENERO<br />\
    <img src="styles/legend/Limite_villas_2_2_74.png" /> COOP., CCU<br />\
    <img src="styles/legend/Limite_villas_2_2_75.png" /> COOP., CIC<br />\
    <img src="styles/legend/Limite_villas_2_2_76.png" /> COOP., COMPAÑIA, DE, FOSFOROS<br />\
    <img src="styles/legend/Limite_villas_2_2_77.png" /> COOP., EL TORO<br />\
    <img src="styles/legend/Limite_villas_2_2_78.png" /> COOP., ESTEBAN CALAF<br />\
    <img src="styles/legend/Limite_villas_2_2_79.png" /> COOP., FATIMA<br />\
    <img src="styles/legend/Limite_villas_2_2_80.png" /> COOP., HERNAN, DEJHON<br />\
    <img src="styles/legend/Limite_villas_2_2_81.png" /> COOP., LAS LILAS<br />\
    <img src="styles/legend/Limite_villas_2_2_82.png" /> COOP., LAS PALMAS<br />\
    <img src="styles/legend/Limite_villas_2_2_83.png" /> COOP., LEON XIII<br />\
    <img src="styles/legend/Limite_villas_2_2_84.png" /> COOP., LLAIMA<br />\
    <img src="styles/legend/Limite_villas_2_2_85.png" /> COOP., LOS HOTELEROS<br />\
    <img src="styles/legend/Limite_villas_2_2_86.png" /> COOP., LOS NOGALES<br />\
    <img src="styles/legend/Limite_villas_2_2_87.png" /> COOP., LOS, NIBELUNGOS<br />\
    <img src="styles/legend/Limite_villas_2_2_88.png" /> COOP., LOS, NOGALES<br />\
    <img src="styles/legend/Limite_villas_2_2_89.png" /> COOP., MARIA, URSELAY<br />\
    <img src="styles/legend/Limite_villas_2_2_90.png" /> COOP., PEÑON<br />\
    <img src="styles/legend/Limite_villas_2_2_91.png" /> COOP., PERSONAL, FORESTAL, COPIHUE<br />\
    <img src="styles/legend/Limite_villas_2_2_92.png" /> COOP., RIO CLARO<br />\
    <img src="styles/legend/Limite_villas_2_2_93.png" /> COOP., SAN ANDRÉS<br />\
    <img src="styles/legend/Limite_villas_2_2_94.png" /> COOP., SANTA ELIANA, (EX VITIVINICOLA)<br />\
    <img src="styles/legend/Limite_villas_2_2_95.png" /> COOP., SAUZAL<br />\
    <img src="styles/legend/Limite_villas_2_2_96.png" /> COOP., SEMINARIO<br />\
    <img src="styles/legend/Limite_villas_2_2_97.png" /> COOP., SUIZA<br />\
    <img src="styles/legend/Limite_villas_2_2_98.png" /> COOP., TRALCA<br />\
    <img src="styles/legend/Limite_villas_2_2_99.png" /> COOP., VICENTE VAN GOGH<br />\
    <img src="styles/legend/Limite_villas_2_2_100.png" /> COOP., VICTOR, MACCHIAVELO<br />\
    <img src="styles/legend/Limite_villas_2_2_101.png" /> COOP.,EL TRUENO<br />\
    <img src="styles/legend/Limite_villas_2_2_102.png" /> ECOMITAX, CONTRALORIA<br />\
    <img src="styles/legend/Limite_villas_2_2_103.png" /> LOTEO BRISAS DE SAN MIGUEL<br />\
    <img src="styles/legend/Limite_villas_2_2_104.png" /> LOTEO DON AMBROSIO<br />\
    <img src="styles/legend/Limite_villas_2_2_105.png" /> LOTEO DON ARTURO<br />\
    <img src="styles/legend/Limite_villas_2_2_106.png" /> LOTEO DON MANUEL<br />\
    <img src="styles/legend/Limite_villas_2_2_107.png" /> LOTEO DON MARCELO I<br />\
    <img src="styles/legend/Limite_villas_2_2_108.png" /> LOTEO DON MARCELO II<br />\
    <img src="styles/legend/Limite_villas_2_2_109.png" /> LOTEO DON RODOLFO<br />\
    <img src="styles/legend/Limite_villas_2_2_110.png" /> Loteo Esmeralda Sur<br />\
    <img src="styles/legend/Limite_villas_2_2_111.png" /> LOTEO HACIENDA, LAS RASTRAS<br />\
    <img src="styles/legend/Limite_villas_2_2_112.png" /> LOTEO INGLÉS<br />\
    <img src="styles/legend/Limite_villas_2_2_113.png" /> Loteo La Reina<br />\
    <img src="styles/legend/Limite_villas_2_2_114.png" /> LOTEO LAS BRISAS DEL PARQUE<br />\
    <img src="styles/legend/Limite_villas_2_2_115.png" /> LOTEO LAS PARCELAS<br />\
    <img src="styles/legend/Limite_villas_2_2_116.png" /> LOTEO LAS RASTRAS<br />\
    <img src="styles/legend/Limite_villas_2_2_117.png" /> LOTEO LOMAS DE SANTA MARÍA<br />\
    <img src="styles/legend/Limite_villas_2_2_118.png" /> LOTEO NUEVA ILUSIÓN<br />\
    <img src="styles/legend/Limite_villas_2_2_119.png" /> LOTEO OBREROS MUNICIPALES<br />\
    <img src="styles/legend/Limite_villas_2_2_120.png" /> LOTEO PARQUE LAS RASTRAS<br />\
    <img src="styles/legend/Limite_villas_2_2_121.png" /> LOTEO PARQUE SAN MIGUEL<br />\
    <img src="styles/legend/Limite_villas_2_2_122.png" /> LOTEO PROSPERIDAD<br />\
    <img src="styles/legend/Limite_villas_2_2_123.png" /> Loteo Providencia Norte<br />\
    <img src="styles/legend/Limite_villas_2_2_124.png" /> LOTEO SAN ANDRES<br />\
    <img src="styles/legend/Limite_villas_2_2_125.png" /> LOTEO SAN ANTONIO<br />\
    <img src="styles/legend/Limite_villas_2_2_126.png" /> LOTEO SAN MATEO<br />\
    <img src="styles/legend/Limite_villas_2_2_127.png" /> LOTEO SANTA MARTA<br />\
    <img src="styles/legend/Limite_villas_2_2_128.png" /> LOTEO, 11 SUR, 12 Y 13 OTE.<br />\
    <img src="styles/legend/Limite_villas_2_2_129.png" /> LOTEO, ALTOS DEL PARQUE I<br />\
    <img src="styles/legend/Limite_villas_2_2_130.png" /> LOTEO, ALTOS DEL PARQUE II<br />\
    <img src="styles/legend/Limite_villas_2_2_131.png" /> LOTEO, BICENTENARIO I<br />\
    <img src="styles/legend/Limite_villas_2_2_132.png" /> LOTEO, BICENTENARIO II<br />\
    <img src="styles/legend/Limite_villas_2_2_133.png" /> LOTEO, BICENTENARIO III<br />\
    <img src="styles/legend/Limite_villas_2_2_134.png" /> LOTEO, BICENTENARIO IV<br />\
    <img src="styles/legend/Limite_villas_2_2_135.png" /> LOTEO, BICENTENARIO LIRCAY I<br />\
    <img src="styles/legend/Limite_villas_2_2_136.png" /> LOTEO, BICENTENARIO V<br />\
    <img src="styles/legend/Limite_villas_2_2_137.png" /> LOTEO, BICENTENARIO VI<br />\
    <img src="styles/legend/Limite_villas_2_2_138.png" /> LOTEO, BICENTENARIO VII<br />\
    <img src="styles/legend/Limite_villas_2_2_139.png" /> LOTEO, CAPILLA ESMERALDA<br />\
    <img src="styles/legend/Limite_villas_2_2_140.png" /> LOTEO, DE LA VIÑA<br />\
    <img src="styles/legend/Limite_villas_2_2_141.png" /> LOTEO, EL SOLAR DEL PARQUE<br />\
    <img src="styles/legend/Limite_villas_2_2_142.png" /> LOTEO, ESMERALDA NORTE<br />\
    <img src="styles/legend/Limite_villas_2_2_143.png" /> LOTEO, HUERTOS DE SAN MIGUEL<br />\
    <img src="styles/legend/Limite_villas_2_2_144.png" /> LOTEO, JARDIN DE LA ESMERALDA<br />\
    <img src="styles/legend/Limite_villas_2_2_145.png" /> LOTEO, LOS INGENIEROS<br />\
    <img src="styles/legend/Limite_villas_2_2_146.png" /> LOTEO, NEMESIO ANTÚNEZ<br />\
    <img src="styles/legend/Limite_villas_2_2_147.png" /> LOTEO, OBREROS, MUNICIPALES<br />\
    <img src="styles/legend/Limite_villas_2_2_148.png" /> LOTEO, PORTAL NORTE LIRCAY<br />\
    <img src="styles/legend/Limite_villas_2_2_149.png" /> LOTEO, PORTONES DE PICHIMAPU<br />\
    <img src="styles/legend/Limite_villas_2_2_150.png" /> LOTEO, PUERTAS DEL SOL<br />\
    <img src="styles/legend/Limite_villas_2_2_151.png" /> LOTEO, STA., TERESITA<br />\
    <img src="styles/legend/Limite_villas_2_2_152.png" /> LOTEO, VALLES DEL COUNTRY I<br />\
    <img src="styles/legend/Limite_villas_2_2_153.png" /> LOTEO, VALLES DEL COUNTRY II<br />\
    <img src="styles/legend/Limite_villas_2_2_154.png" /> LOTEO, VALLES DEL COUNTRY III<br />\
    <img src="styles/legend/Limite_villas_2_2_155.png" /> LOTEO, VIÑA ESMERALDA<br />\
    <img src="styles/legend/Limite_villas_2_2_156.png" /> LOTEO, VIÑEDOS DEL VALLE<br />\
    <img src="styles/legend/Limite_villas_2_2_157.png" /> LOTEO,EL, ARRAYAN<br />\
    <img src="styles/legend/Limite_villas_2_2_158.png" /> Mercedes<br />\
    <img src="styles/legend/Limite_villas_2_2_159.png" /> Panguilemo<br />\
    <img src="styles/legend/Limite_villas_2_2_160.png" /> PARCELACION, FLOR DE CHILE<br />\
    <img src="styles/legend/Limite_villas_2_2_161.png" /> PARCELACIÓN, LOMAS DE LA VIÑA<br />\
    <img src="styles/legend/Limite_villas_2_2_162.png" /> PARQUE UNIVERSITARIO<br />\
    <img src="styles/legend/Limite_villas_2_2_163.png" /> PARQUE, DEL SOL I<br />\
    <img src="styles/legend/Limite_villas_2_2_164.png" /> PARQUE, DEL SOL II<br />\
    <img src="styles/legend/Limite_villas_2_2_165.png" /> POBL. CANCHA RAYADA<br />\
    <img src="styles/legend/Limite_villas_2_2_166.png" /> POBL. COSTANERA<br />\
    <img src="styles/legend/Limite_villas_2_2_167.png" /> POBL. DE LA CRUZ<br />\
    <img src="styles/legend/Limite_villas_2_2_168.png" /> POBL. ESPERANZA<br />\
    <img src="styles/legend/Limite_villas_2_2_169.png" /> POBL. FAUSTINO GONZALEZ<br />\
    <img src="styles/legend/Limite_villas_2_2_170.png" /> POBL. JOSE MIGUEL CARRERA<br />\
    <img src="styles/legend/Limite_villas_2_2_171.png" /> POBL. JUAN HERRERA<br />\
    <img src="styles/legend/Limite_villas_2_2_172.png" /> POBL. LAS LILAS<br />\
    <img src="styles/legend/Limite_villas_2_2_173.png" /> POBL. MAITENHUAPI<br />\
    <img src="styles/legend/Limite_villas_2_2_174.png" /> POBL. MANSO DE VELASCO<br />\
    <img src="styles/legend/Limite_villas_2_2_175.png" /> POBL. MI CASA 1<br />\
    <img src="styles/legend/Limite_villas_2_2_176.png" /> POBL. ORIENTE<br />\
    <img src="styles/legend/Limite_villas_2_2_177.png" /> POBL. PADRE HURTADO<br />\
    <img src="styles/legend/Limite_villas_2_2_178.png" /> POBL. PANAMERICANA SUR<br />\
    <img src="styles/legend/Limite_villas_2_2_179.png" /> POBL. PEDRO AGUIRRE C.<br />\
    <img src="styles/legend/Limite_villas_2_2_180.png" /> POBL. SOR TERESA DE LOS ANDES<br />\
    <img src="styles/legend/Limite_villas_2_2_181.png" /> POBL., ARGENTINA<br />\
    <img src="styles/legend/Limite_villas_2_2_182.png" /> POBL., ASTABURUAGA<br />\
    <img src="styles/legend/Limite_villas_2_2_183.png" /> POBL., BELGRANO<br />\
    <img src="styles/legend/Limite_villas_2_2_184.png" /> POBL., BRILLA EL SOL<br />\
    <img src="styles/legend/Limite_villas_2_2_185.png" /> POBL., CAMILO, HENRÍQUEZ<br />\
    <img src="styles/legend/Limite_villas_2_2_186.png" /> POBL., CLAUDIO MATTE<br />\
    <img src="styles/legend/Limite_villas_2_2_187.png" /> POBL., CONVITAL<br />\
    <img src="styles/legend/Limite_villas_2_2_188.png" /> POBL., CRISTI, GALLO<br />\
    <img src="styles/legend/Limite_villas_2_2_189.png" /> POBL., DIEGO, PORTALES<br />\
    <img src="styles/legend/Limite_villas_2_2_190.png" /> POBL., EDEN<br />\
    <img src="styles/legend/Limite_villas_2_2_191.png" /> POBL., EL ESFUERZO<br />\
    <img src="styles/legend/Limite_villas_2_2_192.png" /> POBL., EL MIRADOR<br />\
    <img src="styles/legend/Limite_villas_2_2_193.png" /> POBL., EL PRADO<br />\
    <img src="styles/legend/Limite_villas_2_2_194.png" /> POBL., EL TABACO<br />\
    <img src="styles/legend/Limite_villas_2_2_195.png" /> POBL., EMPLEADOS, CGEI<br />\
    <img src="styles/legend/Limite_villas_2_2_196.png" /> POBL., FERROVIARIA<br />\
    <img src="styles/legend/Limite_villas_2_2_197.png" /> POBL., INDEPENDENCIA<br />\
    <img src="styles/legend/Limite_villas_2_2_198.png" /> POBL., JOSE IGNACIO, CIENFUEGOS<br />\
    <img src="styles/legend/Limite_villas_2_2_199.png" /> POBL., JUAN ANTONIO, RIOS<br />\
    <img src="styles/legend/Limite_villas_2_2_200.png" /> POBL., LA FLORIDA<br />\
    <img src="styles/legend/Limite_villas_2_2_201.png" /> POBL., LAS LILAS<br />\
    <img src="styles/legend/Limite_villas_2_2_202.png" /> POBL., LIBERTAD<br />\
    <img src="styles/legend/Limite_villas_2_2_203.png" /> POBL., NACIONAL<br />\
    <img src="styles/legend/Limite_villas_2_2_204.png" /> POBL., OLAVARRIA<br />\
    <img src="styles/legend/Limite_villas_2_2_205.png" /> POBL., RENE, SCHNEIDER<br />\
    <img src="styles/legend/Limite_villas_2_2_206.png" /> POBL., RIO CLARO<br />\
    <img src="styles/legend/Limite_villas_2_2_207.png" /> POBL., SGTO. 2º DANIEL, REBOLLEDO<br />\
    <img src="styles/legend/Limite_villas_2_2_208.png" /> POBL., TALCA<br />\
    <img src="styles/legend/Limite_villas_2_2_209.png" /> POBLACIÓN CARLOS TRUPP<br />\
    <img src="styles/legend/Limite_villas_2_2_210.png" /> Poblacion La Obra<br />\
    <img src="styles/legend/Limite_villas_2_2_211.png" /> POBLACIÓN SAN LUIS<br />\
    <img src="styles/legend/Limite_villas_2_2_212.png" /> POBLACIÓN SAN MIGUEL DEL PIDUCO<br />\
    <img src="styles/legend/Limite_villas_2_2_213.png" /> POBLACIÓN SANTA CLARA<br />\
    <img src="styles/legend/Limite_villas_2_2_214.png" /> POBLACION, ALFONSO URZUA<br />\
    <img src="styles/legend/Limite_villas_2_2_215.png" /> POBLACION, HULQUILEMU<br />\
    <img src="styles/legend/Limite_villas_2_2_216.png" /> VILLA ,CAMARA, DE COMERCIO<br />\
    <img src="styles/legend/Limite_villas_2_2_217.png" /> Villa Carlos Gonzalez<br />\
    <img src="styles/legend/Limite_villas_2_2_218.png" /> VILLA CINDEC<br />\
    <img src="styles/legend/Limite_villas_2_2_219.png" /> VILLA CORDILLERA<br />\
    <img src="styles/legend/Limite_villas_2_2_220.png" /> VILLA DON ALFONSO<br />\
    <img src="styles/legend/Limite_villas_2_2_221.png" /> VILLA DON ENRIQUE<br />\
    <img src="styles/legend/Limite_villas_2_2_222.png" /> VILLA DON GERARDO<br />\
    <img src="styles/legend/Limite_villas_2_2_223.png" /> VILLA DON GONZALO I<br />\
    <img src="styles/legend/Limite_villas_2_2_224.png" /> VILLA DON HORACIO<br />\
    <img src="styles/legend/Limite_villas_2_2_225.png" /> VILLA DON RAFAEL<br />\
    <img src="styles/legend/Limite_villas_2_2_226.png" /> VILLA DON RICARDO<br />\
    <img src="styles/legend/Limite_villas_2_2_227.png" /> VILLA DON SEBASTIAN<br />\
    <img src="styles/legend/Limite_villas_2_2_228.png" /> VILLA DOÑA CONSUELO III<br />\
    <img src="styles/legend/Limite_villas_2_2_229.png" /> VILLA DOÑA ROSA<br />\
    <img src="styles/legend/Limite_villas_2_2_230.png" /> VILLA EL ARENAL, EX SANTA ROSA<br />\
    <img src="styles/legend/Limite_villas_2_2_231.png" /> VILLA EL PARQUE<br />\
    <img src="styles/legend/Limite_villas_2_2_232.png" /> VILLA EMAUS<br />\
    <img src="styles/legend/Limite_villas_2_2_233.png" /> VILLA EMIEL<br />\
    <img src="styles/legend/Limite_villas_2_2_234.png" /> VILLA ENSUEÑO<br />\
    <img src="styles/legend/Limite_villas_2_2_235.png" /> VILLA ESPAÑA<br />\
    <img src="styles/legend/Limite_villas_2_2_236.png" /> Villa Estacion<br />\
    <img src="styles/legend/Limite_villas_2_2_237.png" /> VILLA FONOTAL<br />\
    <img src="styles/legend/Limite_villas_2_2_238.png" /> VILLA GABRIELA MISTRAL<br />\
    <img src="styles/legend/Limite_villas_2_2_239.png" /> VILLA INGLESA<br />\
    <img src="styles/legend/Limite_villas_2_2_240.png" /> VILLA JARDÍN DEL ESTE<br />\
    <img src="styles/legend/Limite_villas_2_2_241.png" /> VILLA JUVENTUD<br />\
    <img src="styles/legend/Limite_villas_2_2_242.png" /> VILLA LA PAZ<br />\
    <img src="styles/legend/Limite_villas_2_2_243.png" /> VILLA LAS AMERICAS<br />\
    <img src="styles/legend/Limite_villas_2_2_244.png" /> VILLA LAS AMERICAS 10<br />\
    <img src="styles/legend/Limite_villas_2_2_245.png" /> VILLA LAS, ARAUCARIAS<br />\
    <img src="styles/legend/Limite_villas_2_2_246.png" /> VILLA LOMAS DE LIRCAY<br />\
    <img src="styles/legend/Limite_villas_2_2_247.png" /> VILLA LOS CONQUISTADORES<br />\
    <img src="styles/legend/Limite_villas_2_2_248.png" /> VILLA LOS TULIPANES<br />\
    <img src="styles/legend/Limite_villas_2_2_249.png" /> VILLA LUCERO<br />\
    <img src="styles/legend/Limite_villas_2_2_250.png" /> VILLA LUSMIRO<br />\
    <img src="styles/legend/Limite_villas_2_2_251.png" /> VILLA MADRID<br />\
    <img src="styles/legend/Limite_villas_2_2_252.png" /> VILLA MI CASA<br />\
    <img src="styles/legend/Limite_villas_2_2_253.png" /> VILLA MONS., RICARDO, CASTRO<br />\
    <img src="styles/legend/Limite_villas_2_2_254.png" /> VILLA NATALIA<br />\
    <img src="styles/legend/Limite_villas_2_2_255.png" /> VILLA NAZARETH NORTE<br />\
    <img src="styles/legend/Limite_villas_2_2_256.png" /> VILLA NAZARETH SUR<br />\
    <img src="styles/legend/Limite_villas_2_2_257.png" /> VILLA PARQUE INDUSTRIAL<br />\
    <img src="styles/legend/Limite_villas_2_2_258.png" /> VILLA PEHUÉN<br />\
    <img src="styles/legend/Limite_villas_2_2_259.png" /> VILLA PERU<br />\
    <img src="styles/legend/Limite_villas_2_2_260.png" /> VILLA PUCARA<br />\
    <img src="styles/legend/Limite_villas_2_2_261.png" /> VILLA REAL<br />\
    <img src="styles/legend/Limite_villas_2_2_262.png" /> VILLA SAN AGUSTIN DE CONTRALORIA<br />\
    <img src="styles/legend/Limite_villas_2_2_263.png" /> VILLA SAN MIGUEL<br />\
    <img src="styles/legend/Limite_villas_2_2_264.png" /> VILLA SAN SEBASTIAN<br />\
    <img src="styles/legend/Limite_villas_2_2_265.png" /> VILLA TABUNCO<br />\
    <img src="styles/legend/Limite_villas_2_2_266.png" /> VILLA VALLE CLARO<br />\
    <img src="styles/legend/Limite_villas_2_2_267.png" /> VILLA, 10 NORTE<br />\
    <img src="styles/legend/Limite_villas_2_2_268.png" /> VILLA, ACUARIO<br />\
    <img src="styles/legend/Limite_villas_2_2_269.png" /> VILLA, AITUHÉ<br />\
    <img src="styles/legend/Limite_villas_2_2_270.png" /> VILLA, ALAMEDA<br />\
    <img src="styles/legend/Limite_villas_2_2_271.png" /> VILLA, ANDALUCIA<br />\
    <img src="styles/legend/Limite_villas_2_2_272.png" /> VILLA, ANNELIS<br />\
    <img src="styles/legend/Limite_villas_2_2_273.png" /> VILLA, ANTILLANCA<br />\
    <img src="styles/legend/Limite_villas_2_2_274.png" /> VILLA, ARANJUEZ<br />\
    <img src="styles/legend/Limite_villas_2_2_275.png" /> VILLA, ARMONIA<br />\
    <img src="styles/legend/Limite_villas_2_2_276.png" /> VILLA, ASTURIAS<br />\
    <img src="styles/legend/Limite_villas_2_2_277.png" /> VILLA, BEMMEL<br />\
    <img src="styles/legend/Limite_villas_2_2_278.png" /> VILLA, BOTALCURA<br />\
    <img src="styles/legend/Limite_villas_2_2_279.png" /> VILLA, BRISAS DEL, CLARO<br />\
    <img src="styles/legend/Limite_villas_2_2_280.png" /> VILLA, BUEN PASTOR<br />\
    <img src="styles/legend/Limite_villas_2_2_281.png" /> VILLA, CAMPANARIO<br />\
    <img src="styles/legend/Limite_villas_2_2_282.png" /> VILLA, CARMELITAS<br />\
    <img src="styles/legend/Limite_villas_2_2_283.png" /> VILLA, CASAS DE, MAQUEHUA<br />\
    <img src="styles/legend/Limite_villas_2_2_284.png" /> VILLA, CERÁMICA<br />\
    <img src="styles/legend/Limite_villas_2_2_285.png" /> VILLA, CIELO AZUL<br />\
    <img src="styles/legend/Limite_villas_2_2_286.png" /> VILLA, CONAVICOOP<br />\
    <img src="styles/legend/Limite_villas_2_2_287.png" /> VILLA, CRISTINA<br />\
    <img src="styles/legend/Limite_villas_2_2_288.png" /> VILLA, DON ANDRES IV<br />\
    <img src="styles/legend/Limite_villas_2_2_289.png" /> VILLA, DON GONZALO II<br />\
    <img src="styles/legend/Limite_villas_2_2_290.png" /> VILLA, DON GONZALO III<br />\
    <img src="styles/legend/Limite_villas_2_2_291.png" /> VILLA, DON GONZALO IV<br />\
    <img src="styles/legend/Limite_villas_2_2_292.png" /> VILLA, DON MATÍAS<br />\
    <img src="styles/legend/Limite_villas_2_2_293.png" /> VILLA, DON MATÍAS II<br />\
    <img src="styles/legend/Limite_villas_2_2_294.png" /> VILLA, DON RENATO<br />\
    <img src="styles/legend/Limite_villas_2_2_295.png" /> VILLA, DON TOMAS<br />\
    <img src="styles/legend/Limite_villas_2_2_296.png" /> VILLA, DON, FELIPE<br />\
    <img src="styles/legend/Limite_villas_2_2_297.png" /> VILLA, DON, MATIAS III<br />\
    <img src="styles/legend/Limite_villas_2_2_298.png" /> VILLA, DOÑA ADELA<br />\
    <img src="styles/legend/Limite_villas_2_2_299.png" /> VILLA, DOÑA BLANCA<br />\
    <img src="styles/legend/Limite_villas_2_2_300.png" /> VILLA, DOÑA CLARA<br />\
    <img src="styles/legend/Limite_villas_2_2_301.png" /> VILLA, DOÑA CONSUELO<br />\
    <img src="styles/legend/Limite_villas_2_2_302.png" /> VILLA, DOÑA CONSUELO IV<br />\
    <img src="styles/legend/Limite_villas_2_2_303.png" /> VILLA, DOÑA FLORENCIA<br />\
    <img src="styles/legend/Limite_villas_2_2_304.png" /> VILLA, DOÑA GLORIA<br />\
    <img src="styles/legend/Limite_villas_2_2_305.png" /> VILLA, DOÑA IGNACIA<br />\
    <img src="styles/legend/Limite_villas_2_2_306.png" /> VILLA, DOÑA JACINTA<br />\
    <img src="styles/legend/Limite_villas_2_2_307.png" /> VILLA, DOÑA JAVIERA<br />\
    <img src="styles/legend/Limite_villas_2_2_308.png" /> VILLA, DOÑA PILAR<br />\
    <img src="styles/legend/Limite_villas_2_2_309.png" /> VILLA, DOÑA, FRANCISCA<br />\
    <img src="styles/legend/Limite_villas_2_2_310.png" /> VILLA, ECUADOR<br />\
    <img src="styles/legend/Limite_villas_2_2_311.png" /> VILLA, EDEN<br />\
    <img src="styles/legend/Limite_villas_2_2_312.png" /> VILLA, EL PARADERO<br />\
    <img src="styles/legend/Limite_villas_2_2_313.png" /> VILLA, EL PARQUE I<br />\
    <img src="styles/legend/Limite_villas_2_2_314.png" /> VILLA, EL PARQUE II<br />\
    <img src="styles/legend/Limite_villas_2_2_315.png" /> VILLA, EL PARQUE III<br />\
    <img src="styles/legend/Limite_villas_2_2_316.png" /> VILLA, EL PARQUE IV<br />\
    <img src="styles/legend/Limite_villas_2_2_317.png" /> VILLA, EL, DESPERTAR<br />\
    <img src="styles/legend/Limite_villas_2_2_318.png" /> VILLA, EL, PARRONAL<br />\
    <img src="styles/legend/Limite_villas_2_2_319.png" /> VILLA, ENDESA<br />\
    <img src="styles/legend/Limite_villas_2_2_320.png" /> VILLA, ESPERANZA<br />\
    <img src="styles/legend/Limite_villas_2_2_321.png" /> VILLA, FRATERNIDAD<br />\
    <img src="styles/legend/Limite_villas_2_2_322.png" /> VILLA, GABRIELA<br />\
    <img src="styles/legend/Limite_villas_2_2_323.png" /> VILLA, GALILEA<br />\
    <img src="styles/legend/Limite_villas_2_2_324.png" /> VILLA, GUIDO LEBRET<br />\
    <img src="styles/legend/Limite_villas_2_2_325.png" /> VILLA, GUILLERMO, URZUA<br />\
    <img src="styles/legend/Limite_villas_2_2_326.png" /> VILLA, ILLINOIS<br />\
    <img src="styles/legend/Limite_villas_2_2_327.png" /> VILLA, JARDIN , DEL VALLE<br />\
    <img src="styles/legend/Limite_villas_2_2_328.png" /> VILLA, JARDIN DE, LA FLORIDA<br />\
    <img src="styles/legend/Limite_villas_2_2_329.png" /> VILLA, JARDIN DEL ESTE VI<br />\
    <img src="styles/legend/Limite_villas_2_2_330.png" /> VILLA, JORGE, CORREA<br />\
    <img src="styles/legend/Limite_villas_2_2_331.png" /> VILLA, JUAN PABLO II<br />\
    <img src="styles/legend/Limite_villas_2_2_332.png" /> VILLA, LAS ARAUCARIAS<br />\
    <img src="styles/legend/Limite_villas_2_2_333.png" /> VILLA, LAS CAMELIAS<br />\
    <img src="styles/legend/Limite_villas_2_2_334.png" /> VILLA, LAS CASAS<br />\
    <img src="styles/legend/Limite_villas_2_2_335.png" /> VILLA, LAS LILAS<br />\
    <img src="styles/legend/Limite_villas_2_2_336.png" /> VILLA, LAS, CÁRMENES<br />\
    <img src="styles/legend/Limite_villas_2_2_337.png" /> VILLA, LORENA<br />\
    <img src="styles/legend/Limite_villas_2_2_338.png" /> VILLA, LOS CASTAÑOS<br />\
    <img src="styles/legend/Limite_villas_2_2_339.png" /> VILLA, LOS CASTAÑOS IV<br />\
    <img src="styles/legend/Limite_villas_2_2_340.png" /> VILLA, LOS CONDORES<br />\
    <img src="styles/legend/Limite_villas_2_2_341.png" /> VILLA, LOS JARDINES SUR<br />\
    <img src="styles/legend/Limite_villas_2_2_342.png" /> VILLA, LOS JARDINES, DE TALCA<br />\
    <img src="styles/legend/Limite_villas_2_2_343.png" /> VILLA, LOS MAITENES<br />\
    <img src="styles/legend/Limite_villas_2_2_344.png" /> VILLA, LOS NARANJOS<br />\
    <img src="styles/legend/Limite_villas_2_2_345.png" /> VILLA, LOS PALTOS<br />\
    <img src="styles/legend/Limite_villas_2_2_346.png" /> VILLA, LOS ROBLES<br />\
    <img src="styles/legend/Limite_villas_2_2_347.png" /> VILLA, LOS TILOS<br />\
    <img src="styles/legend/Limite_villas_2_2_348.png" /> VILLA, LOS, AROMOS<br />\
    <img src="styles/legend/Limite_villas_2_2_349.png" /> VILLA, LOS, GOMEROS<br />\
    <img src="styles/legend/Limite_villas_2_2_350.png" /> VILLA, MAGISTERIO<br />\
    <img src="styles/legend/Limite_villas_2_2_351.png" /> VILLA, MALLORCA<br />\
    <img src="styles/legend/Limite_villas_2_2_352.png" /> VILLA, MANTOS, DEL RIO<br />\
    <img src="styles/legend/Limite_villas_2_2_353.png" /> VILLA, MANUEL LARRAIN<br />\
    <img src="styles/legend/Limite_villas_2_2_354.png" /> VILLA, MARIA ELENA<br />\
    <img src="styles/legend/Limite_villas_2_2_355.png" /> VILLA, MARIO, MONTUCCI<br />\
    <img src="styles/legend/Limite_villas_2_2_356.png" /> VILLA, MAULE<br />\
    <img src="styles/legend/Limite_villas_2_2_357.png" /> VILLA, MERCEDES<br />\
    <img src="styles/legend/Limite_villas_2_2_358.png" /> VILLA, MIRAFLORES<br />\
    <img src="styles/legend/Limite_villas_2_2_359.png" /> VILLA, NATALIO, GUROVIC<br />\
    <img src="styles/legend/Limite_villas_2_2_360.png" /> VILLA, NAVIDAD<br />\
    <img src="styles/legend/Limite_villas_2_2_361.png" /> VILLA, NERUDA<br />\
    <img src="styles/legend/Limite_villas_2_2_362.png" /> VILLA, NORTE VERDE<br />\
    <img src="styles/legend/Limite_villas_2_2_363.png" /> VILLA, NORTE, VERDE<br />\
    <img src="styles/legend/Limite_villas_2_2_364.png" /> VILLA, OTTO, SCHAYE<br />\
    <img src="styles/legend/Limite_villas_2_2_365.png" /> VILLA, PIDUCO<br />\
    <img src="styles/legend/Limite_villas_2_2_366.png" /> VILLA, PORTADA, DEL EDEN<br />\
    <img src="styles/legend/Limite_villas_2_2_367.png" /> VILLA, PORTAL DEL MAULE<br />\
    <img src="styles/legend/Limite_villas_2_2_368.png" /> VILLA, PRIMAVERA<br />\
    <img src="styles/legend/Limite_villas_2_2_369.png" /> VILLA, PRISMA<br />\
    <img src="styles/legend/Limite_villas_2_2_370.png" /> VILLA, PUCARÁ II<br />\
    <img src="styles/legend/Limite_villas_2_2_371.png" /> VILLA, PUCARÁ III<br />\
    <img src="styles/legend/Limite_villas_2_2_372.png" /> VILLA, PUCARÁ IV<br />\
    <img src="styles/legend/Limite_villas_2_2_373.png" /> VILLA, PUCARÁ IX<br />\
    <img src="styles/legend/Limite_villas_2_2_374.png" /> VILLA, PUCARÁ V<br />\
    <img src="styles/legend/Limite_villas_2_2_375.png" /> VILLA, PUCARÁ VI<br />\
    <img src="styles/legend/Limite_villas_2_2_376.png" /> VILLA, PUCARÁ VII<br />\
    <img src="styles/legend/Limite_villas_2_2_377.png" /> VILLA, PUCARÁ VIII<br />\
    <img src="styles/legend/Limite_villas_2_2_378.png" /> VILLA, PUELCHE<br />\
    <img src="styles/legend/Limite_villas_2_2_379.png" /> VILLA, QUEBRADA, VERDE<br />\
    <img src="styles/legend/Limite_villas_2_2_380.png" /> VILLA, QUINTO, CENTENARIO<br />\
    <img src="styles/legend/Limite_villas_2_2_381.png" /> VILLA, RICARDO<br />\
    <img src="styles/legend/Limite_villas_2_2_382.png" /> VILLA, SAGITARIO<br />\
    <img src="styles/legend/Limite_villas_2_2_383.png" /> VILLA, SAMUEL LILLO<br />\
    <img src="styles/legend/Limite_villas_2_2_384.png" /> VILLA, SAN AGUSTIN<br />\
    <img src="styles/legend/Limite_villas_2_2_385.png" /> VILLA, SAN FRANCISCO<br />\
    <img src="styles/legend/Limite_villas_2_2_386.png" /> VILLA, SAN FRANCISCO, DE ASIS<br />\
    <img src="styles/legend/Limite_villas_2_2_387.png" /> VILLA, SAN GUILLERMO<br />\
    <img src="styles/legend/Limite_villas_2_2_388.png" /> VILLA, SAN JORGE<br />\
    <img src="styles/legend/Limite_villas_2_2_389.png" /> VILLA, SAN JOSE, DE CAIVAN<br />\
    <img src="styles/legend/Limite_villas_2_2_390.png" /> VILLA, SAN JOSE, DE LA FLORIDA<br />\
    <img src="styles/legend/Limite_villas_2_2_391.png" /> VILLA, SAN LUIS<br />\
    <img src="styles/legend/Limite_villas_2_2_392.png" /> VILLA, SAN MARCOS<br />\
    <img src="styles/legend/Limite_villas_2_2_393.png" /> VILLA, SAN PIER<br />\
    <img src="styles/legend/Limite_villas_2_2_394.png" /> VILLA, SANDRA<br />\
    <img src="styles/legend/Limite_villas_2_2_395.png" /> VILLA, SN. JOSE, CARPINTERO<br />\
    <img src="styles/legend/Limite_villas_2_2_396.png" /> VILLA, SOL PTE.<br />\
    <img src="styles/legend/Limite_villas_2_2_397.png" /> VILLA, STA. CAROLINA<br />\
    <img src="styles/legend/Limite_villas_2_2_398.png" /> VILLA, STA. MARIA, DE COLIN<br />\
    <img src="styles/legend/Limite_villas_2_2_399.png" /> VILLA, STA. RITA<br />\
    <img src="styles/legend/Limite_villas_2_2_400.png" /> VILLA, STA., AURELIA<br />\
    <img src="styles/legend/Limite_villas_2_2_401.png" /> VILLA, STA., CARMEN<br />\
    <img src="styles/legend/Limite_villas_2_2_402.png" /> VILLA, STELLA<br />\
    <img src="styles/legend/Limite_villas_2_2_403.png" /> VILLA, SUR<br />\
    <img src="styles/legend/Limite_villas_2_2_404.png" /> VILLA, TALCA SUR<br />\
    <img src="styles/legend/Limite_villas_2_2_405.png" /> VILLA, TERCERA, COMISARIA<br />\
    <img src="styles/legend/Limite_villas_2_2_406.png" /> VILLA, TRUMAO<br />\
    <img src="styles/legend/Limite_villas_2_2_407.png" /> VILLA, UNIVERSITARIA<br />\
    <img src="styles/legend/Limite_villas_2_2_408.png" /> VILLA, VERDE<br />\
    <img src="styles/legend/Limite_villas_2_2_409.png" /> VILLA, VITRAPRO<br />\
    <img src="styles/legend/Limite_villas_2_2_410.png" /> <br />'
        });var format_AVENIDAS_3 = new ol.format.GeoJSON();
var features_AVENIDAS_3 = format_AVENIDAS_3.readFeatures(json_AVENIDAS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AVENIDAS_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AVENIDAS_3.addFeatures(features_AVENIDAS_3);var lyr_AVENIDAS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AVENIDAS_3, 
                style: style_AVENIDAS_3,
                title: '<img src="styles/legend/AVENIDAS_3.png" /> AVENIDAS'
            });

lyr_Canales84_0.setVisible(true);lyr_EJE_1.setVisible(true);lyr_Limite_villas_2_2.setVisible(true);lyr_AVENIDAS_3.setVisible(true);
var layersList = [baseLayer,lyr_Canales84_0,lyr_EJE_1,lyr_Limite_villas_2_2,lyr_AVENIDAS_3];
lyr_Canales84_0.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'Text': 'Text', });
lyr_EJE_1.set('fieldAliases', {'Id': 'Id', 'NOMBRE_VIA': 'NOMBRE_VIA', 'TIPO_VIA': 'TIPO_VIA', 'Largo': 'Largo', 'LARGO_1': 'LARGO_1', });
lyr_Limite_villas_2_2.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'Text': 'Text', 'area': 'area', 'NOMBRE': 'NOMBRE', 'HHGJH': 'HHGJH', 'IMAGEN 1': 'IMAGEN 1', });
lyr_AVENIDAS_3.set('fieldAliases', {'Id': 'Id', 'NOMBRE': 'NOMBRE', });
lyr_Canales84_0.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'TextEdit', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'Text': 'TextEdit', });
lyr_EJE_1.set('fieldImages', {'Id': 'TextEdit', 'NOMBRE_VIA': 'TextEdit', 'TIPO_VIA': 'TextEdit', 'Largo': 'TextEdit', 'LARGO_1': 'TextEdit', });
lyr_Limite_villas_2_2.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'TextEdit', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'Text': 'TextEdit', 'area': 'TextEdit', 'NOMBRE': 'TextEdit', 'HHGJH': 'TextEdit', 'IMAGEN 1': 'ExternalResource', });
lyr_AVENIDAS_3.set('fieldImages', {'Id': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_Canales84_0.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'Text': 'no label', });
lyr_EJE_1.set('fieldLabels', {'Id': 'no label', 'NOMBRE_VIA': 'no label', 'TIPO_VIA': 'no label', 'Largo': 'no label', 'LARGO_1': 'no label', });
lyr_Limite_villas_2_2.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'Text': 'no label', 'area': 'no label', 'NOMBRE': 'no label', 'HHGJH': 'no label', 'IMAGEN 1': 'no label', });
lyr_AVENIDAS_3.set('fieldLabels', {'Id': 'no label', 'NOMBRE': 'no label', });
lyr_AVENIDAS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});