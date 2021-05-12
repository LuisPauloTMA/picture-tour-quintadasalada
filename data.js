var APP_DATA = {
  "scenes": [
    {
      "id": "0-360_quintadasalada_entradaquarto",
      "name": "360_QuintaDaSalada_EntradaQuarto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 375,
      "initialViewParameters": {
        "yaw": 0.08083203860494237,
        "pitch": 0.10974331740971621,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.1196203863326506,
          "pitch": 0.39609321795041197,
          "rotation": 0,
          "target": "1-360_quintadasalada_meioquarto"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9740505757805309,
          "pitch": 0.36380203979596004,
          "title": "Quinta Da Salada",
          "text": "Lamego, Portugal"
        }
      ]
    },
    {
      "id": "1-360_quintadasalada_meioquarto",
      "name": "360_QuintaDaSalada_MeioQuarto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 375,
      "initialViewParameters": {
        "yaw": -0.5266568782711669,
        "pitch": 0.2387694537903169,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.3809560636579334,
          "pitch": 0.5555841805419419,
          "rotation": 0,
          "target": "0-360_quintadasalada_entradaquarto"
        },
        {
          "yaw": -0.19041112791054005,
          "pitch": 0.6841554367783811,
          "rotation": 0,
          "target": "2-00_360_quintadasalada_casadebanho_ricoh"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-00_360_quintadasalada_casadebanho_ricoh",
      "name": "00_360_QuintaDaSalada_CasaDeBanho_RICOH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 375,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
