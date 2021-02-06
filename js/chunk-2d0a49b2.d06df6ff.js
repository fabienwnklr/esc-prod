(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a49b2"],{"06c9":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-data-table",{staticClass:"elevation-1",attrs:{locale:"fr-FR",headers:e.headers,items:e.tournaments,"item-key":"id","sort-by":"username",search:e.search,expanded:e.expanded,"show-expand":""},on:{"update:expanded":function(t){e.expanded=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[e._v("Tournois")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{autofocus:"",label:"Nom du jeu"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),a("v-col",{attrs:{cols:"12"}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Annuler ")]),a("v-btn",{attrs:{color:"green",text:""},on:{click:e.save}},[e._v(" Valider ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Are you sure you want to delete this item?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.deleteItemConfirm(e.editedItem)}}},[e._v("OK")]),a("v-spacer")],1)],1)],1)],1),a("v-text-field",{staticClass:"mx-4",attrs:{"append-icon":"mdi-magnify",label:"Rechercher","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]},proxy:!0},{key:"item.start_date",fn:function(t){var n=t.item;return[a("span",[e._v(e._s(new Date(n.start_date).toLocaleString().slice(0,-3)))])]}},{key:"item.actions",fn:function(t){var n=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Rafraichir ")])]},proxy:!0},{key:"expanded-item",fn:function(t){var n=t.headers,i=t.item;return[a("td",{attrs:{colspan:n.length}},[a("ul",[a("li",[i.createdAt&&i.createdBy?a("span",[e._v(" Créé par "+e._s(i.createdBy)+" le "+e._s(new Date(i.createdAt).toLocaleString())+" ")]):a("span",[e._v(" Créé le "+e._s(new Date(i.createdAt).toLocaleString()))])]),a("li",[i.updatedAt&&i.updatedBy?a("span",[e._v(" Dernière modification par "+e._s(i.updatedBy)+" le "+e._s(new Date(i.updatedAt).toLocaleString())+" ")]):a("span",[e._v("Aucune modification depuis la création.")])])])])]}}],null,!0)}),a("v-snackbar",{attrs:{color:this.alertColor},scopedSlots:e._u([{key:"action",fn:function(t){var n=t.attrs;return[a("v-btn",e._b({attrs:{color:e.closeColor,icon:""},on:{click:function(t){e.alert=!1}}},"v-btn",n,!1),[a("v-icon",[e._v("mdi-close")])],1)]}}]),model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[e._v(" "+e._s(this.alertMsg)+" ")])],1)},i=[],o=(a("c975"),a("a434"),a("d3b7"),a("ddb0"),{data:function(){return{alert:!1,alertMsg:"",alertColor:"black",closeColor:"red",search:"",dialog:!1,dialogDelete:!1,expanded:[],headers:[{text:"Nom du tournoi",align:"start",value:"name"},{text:"Date du tournoi",align:"",value:"start_date"},{text:"Nombre de participant",align:"",value:"nb_participant"},{text:"Actions",value:"actions",sortable:!1}],tournaments:[],editedIndex:-1,editedItem:{id:"",name:"",start_date:"",nb_participant:"",createdBy:"",createdAt:"",updatedBy:"",updatedAt:""},defaultItem:{id:"",name:"",start_date:"",nb_participant:"",createdBy:"",createdAt:"",updatedBy:"",updatedAt:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"Ajoute un tournoi":"Modifie le tournoi"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.initialize()},methods:{initialize:function(){var e=this;this.$http("/tournament").then((function(t){e.tournaments=t.data})).catch((function(t){e.alertColor="red",e.closeColor="black",e.alert=!0,e.alertMsg=t.message,console.error(t.errorThrow)}))},editItem:function(e){this.editedIndex=this.tournaments.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.tournaments.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(e){var t=this,a=this.editedIndex;this.$http.delete("/tournament/".concat(e.id)).then((function(e){t.alertColor="green",t.closeColor="black",t.alert=!0,t.alertMsg=e.data.message,t.tournaments.splice(a,1),console.log(e)})).catch((function(e){t.alertColor="red",t.closeColor="black",t.alert=!0,t.alertMsg=e.message,console.error(e)})),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){var e=JSON.parse(localStorage.getItem("user")).username,t=this,a=this.editedIndex;this.editedIndex>-1?(this.editedItem.updatedBy=e,this.$http.put("/tournament/".concat(this.editedItem.id),this.editedItem).then((function(e){t.alertColor="green",t.closeColor="black",t.alert=!0,t.alertMsg=e.data.message,Object.assign(t.tournaments[a],e.data.values)})).catch((function(e){return console.error(e)}))):this.$http.post("/tournament/create",{name:this.editedItem.username,createdBy:e}).then((function(e){t.alertColor="green",t.closeColor="black",t.alert=!0,t.alertMsg=e.data.message,t.tournaments.push(e.data.values)})).catch((function(e){console.error(e),t.alertColor="red",t.closeColor="black",t.alert=!0,t.alertMsg=e.message})),this.close()}}}),r=o,l=a("2877"),s=a("6544"),c=a.n(s),d=a("8336"),u=a("b0af"),m=a("99d9"),v=a("62ad"),h=a("a523"),f=a("8fea"),p=a("169a"),b=a("ce7e"),g=a("132d"),x=a("0fd9"),_=a("2db4"),k=a("2fa4"),C=a("8654"),I=a("71d9"),y=a("2a7f"),D=Object(l["a"])(r,n,i,!1,null,null,null);t["default"]=D.exports;c()(D,{VBtn:d["a"],VCard:u["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:v["a"],VContainer:h["a"],VDataTable:f["a"],VDialog:p["a"],VDivider:b["a"],VIcon:g["a"],VRow:x["a"],VSnackbar:_["a"],VSpacer:k["a"],VTextField:C["a"],VToolbar:I["a"],VToolbarTitle:y["b"]})}}]);
//# sourceMappingURL=chunk-2d0a49b2.d06df6ff.js.map