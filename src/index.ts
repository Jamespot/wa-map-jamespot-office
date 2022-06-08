/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import { iframeQueryMapTypeGuards } from "@workadventure/iframe-api-typings/Api/Events/IframeEvent";
import {bootstrapExtra, getLayersMap} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));


function playUriParse(url: string): {
    base: string;
    mode: string;
    slug: string;
    map: string;
}
{
    const comp = url.split('/');
    let cur = 'start';
    let base = '';
    let slug = '';
    let mode = ''
    let map='';
    comp.forEach( part =>  {
        if (cur == 'start') {
            if (part == '_') {
                mode = 'public';
                cur = 'slug';
            } else if (part=='@') 
            {
                mode = 'controlled';
                cur='slug';
            } else {
                base += part + '/';
            }
        }
        else if (cur == 'slug' ) {
            slug = part ;
            cur = 'map' ;
        }
        else if (cur == 'map' ) {
            map += part + '/';
        }
    });
   
    map = map.substring(0, map.length - 1);  
    if (mode =='public') {
        map = 'https://' + map;
    }
    return {base, mode, slug, map};
}




WA.onInit().then(async () => {
    let layers = await getLayersMap();
    console.log('Current player name: ', WA.player.name);
    console.log(layers);

    layers.forEach((val,key) => {
        if (val && val.properties) {
            val.properties.forEach( prop => {
                if (prop.type=='string' && prop.name=='goto') {
                    console.log("GotoLayer : " + key);
                    WA.room.onEnterLayer(key).subscribe(() => {
                        if ( prop.value == 'slug') {
                            const playStr = playUriParse(WA.room.id);
                            const msg = {"action": "goto", "value": 'https://' + playStr.slug + '/?action=goOAuth&serviceName=myjamespot', "type": "external"};
                            window?.top?.postMessage(msg, '*');
                        } else {
                            try {
                                window?.top?.postMessage(JSON.parse(prop.value), '*');
                            } catch (error) {
                                
                            }
                        }
                    })
                } 
            });
        }
    })

});

