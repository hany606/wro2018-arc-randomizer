
'use strict';

import Field from '../util/field';

let field = null;

export default async function getField() {
    if(field == null) {
        const Http = new XMLHttpRequest();
        const url = 'http://127.0.0.1:3000/field';
        Http.open("GET", url);

        return new Promise((resolve) => {
            Http.send();
            Http.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    field = JSON.parse(this.responseText);
                    console.log(field);
                    field = new Field(field);
                    resolve(field);
                }
            }
        });
    } else {
        return field;
    }
}
