(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11fad702"],{"121f":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[0==e.loaded?a("v-skeleton-loader",{attrs:{type:"table"}}):a("v-data-table",{staticClass:"elevation-1",attrs:{locale:"fr-FR",headers:e.headers,items:e.gamesMode,"item-key":"name","sort-by":"name",search:e.search,expanded:e.expanded,"show-expand":""},on:{"update:expanded":function(t){e.expanded=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[e._v("Modes de jeux")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,n=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",n,!1),i),[e._v(" Ajouter ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{autofocus:"",label:"Nom du mode de jeu",outlined:""},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-autocomplete",{attrs:{"prepend-inner-icon":"mdi-magnify",items:e.games,"item-text":"name","item-value":"id",outlined:"","no-data-text":"Aucun résultats",label:"Jeu(x) associé(s)",clearable:"",multiple:""},model:{value:e.editedItem.games,callback:function(t){e.$set(e.editedItem,"games",t)},expression:"editedItem.games"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Annuler ")]),a("v-btn",{attrs:{color:"green",text:""},on:{click:e.save}},[e._v(" Valider ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Are you sure you want to delete this item?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.deleteItemConfirm(e.editedItem)}}},[e._v("OK")]),a("v-spacer")],1)],1)],1)],1),a("v-text-field",{staticClass:"mx-4",attrs:{"append-icon":"mdi-magnify",label:"Rechercher","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]},proxy:!0},{key:"item.actions",fn:function(t){var i=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(i)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(i)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Rafraichir ")])]},proxy:!0},{key:"expanded-item",fn:function(t){var i=t.headers,n=t.item;return[a("td",{attrs:{colspan:i.length}},[a("ul",[a("li",[e._v(" Créer par "+e._s(n.createdBy)+" le "+e._s(new Date(n.createdAt).toLocaleString())+" ")]),a("li",[n.updatedAt&&n.updatedBy?a("span",[e._v(" Dernière modification par "+e._s(n.updatedBy)+" le "+e._s(new Date(n.updatedAt).toLocaleString())+" ")]):a("span",[e._v("Aucune modification depuis la création.")])])])])]}}],null,!0)}),a("v-snackbar",{attrs:{color:this.alertColor},scopedSlots:e._u([{key:"action",fn:function(t){var i=t.attrs;return[a("v-btn",e._b({attrs:{color:e.closeColor,icon:""},on:{click:function(t){e.alert=!1}}},"v-btn",i,!1),[a("v-icon",[e._v("mdi-close")])],1)]}}]),model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[e._v(" "+e._s(this.alertMsg)+" ")])],1)},n=[],s=(a("c975"),a("d81d"),a("a434"),a("d3b7"),a("ddb0"),{data:function(){return{alert:!1,alertMsg:"",alertColor:"black",closeColor:"red",search:"",dialog:!1,dialogDelete:!1,expanded:[],loaded:!1,games:[],headers:[{text:"Nom",align:"start",value:"name"},{text:"Jeu(x) associé(s)",value:"games",dataType:"String"},{text:"Actions",value:"actions",sortable:!1}],gamesMode:[],editedIndex:-1,editedItem:{id:"",name:"",games:[],createdBy:"",createdAt:"",updatedBy:"",updatedAt:""},defaultItem:{id:"",name:"",games:[],createdBy:"",createdAt:"",updatedBy:"",updatedAt:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"Ajoute un mode de jeu":"Modifie le mode jeu"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.initialize()},methods:{initialize:function(){var e=this;this.$http("/gamesMode").then((function(t){e.gamesMode=t.data,e.loaded=!0})).catch((function(t){e.alertColor="red",e.closeColor="black",e.alert=!0,e.alertMsg=t.message,console.error(t)})),this.$http("/game").then((function(t){e.games=t.data})).catch((function(e){return console.error(e)}))},editItem:function(e){this.editedIndex=this.gamesMode.indexOf(e),e.games=e.games.map((function(e){return e.id})),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.gamesMode.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(e){var t=this,a=this.editedIndex;this.$http.delete("/gamesMode/".concat(e.id)).then((function(e){t.alertColor="green",t.closeColor="black",t.alert=!0,t.alertMsg=e.data.message,t.gamesMode.splice(a,1),console.log(e)})).catch((function(e){t.alertColor="red",t.closeColor="black",t.alert=!0,t.alertMsg=e.message,console.error(e)})),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){var e=JSON.parse(localStorage.getItem("user")).username,t=this,a=this.editedIndex;this.editedIndex>-1?(this.editedItem.updatedBy=e,this.$http.put("/gamesMode/".concat(this.editedItem.id),this.editedItem).then((function(e){t.alertColor="green",t.closeColor="black",t.alert=!0,t.alertMsg=e.data.message,Object.assign(t.gamesMode[a],e.data.values)})).catch((function(e){return console.error(e)}))):(this.editedItem.createdBy=e,this.$http.post("/gamesMode/create",this.editedItem).then((function(e){t.alertColor="green",t.closeColor="black",t.alert=!0,t.alertMsg=e.data.message,t.gamesMode.push(e.data.values)})).catch((function(e){console.error(e),t.alertColor="red",t.closeColor="black",t.alert=!0,t.alertMsg=e.message}))),this.close()}}}),o=s,l=a("2877"),r=a("6544"),c=a.n(r),d=a("c6a6"),u=a("8336"),h=a("b0af"),m=a("99d9"),p=a("62ad"),f=a("a523"),v=a("8fea"),g=a("169a"),b=a("ce7e"),I=a("132d"),y=a("0fd9"),x=a("3129"),S=a("2db4"),k=a("2fa4"),C=a("8654"),D=a("71d9"),_=a("2a7f"),O=Object(l["a"])(o,i,n,!1,null,null,null);t["default"]=O.exports;c()(O,{VAutocomplete:d["a"],VBtn:u["a"],VCard:h["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:p["a"],VContainer:f["a"],VDataTable:v["a"],VDialog:g["a"],VDivider:b["a"],VIcon:I["a"],VRow:y["a"],VSkeletonLoader:x["a"],VSnackbar:S["a"],VSpacer:k["a"],VTextField:C["a"],VToolbar:D["a"],VToolbarTitle:_["b"]})},"1f09":function(e,t,a){},"2bfd":function(e,t,a){},3129:function(e,t,a){"use strict";a("a630"),a("c975"),a("d81d"),a("ac1f"),a("3ca3"),a("5319"),a("1276");var i=a("3835"),n=a("5530"),s=(a("1f09"),a("c995")),o=a("24b2"),l=a("7560"),r=a("58df"),c=a("80d2");t["a"]=Object(r["a"])(s["a"],o["a"],l["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:Object(n["a"])({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return Object(n["a"])(Object(n["a"])({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return Object(n["a"])({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(e,t){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(e," v-skeleton-loader__bone")},t)},genBones:function(e){var t=this,a=e.split("@"),n=Object(i["a"])(a,2),s=n[0],o=n[1],l=function(){return t.genStructure(s)};return Array.from({length:o}).map(l)},genStructure:function(e){var t=[];e=e||this.type||"";var a=this.rootTypes[e]||"";if(e===a);else{if(e.indexOf(",")>-1)return this.mapBones(e);if(e.indexOf("@")>-1)return this.genBones(e);a.indexOf(",")>-1?t=this.mapBones(a):a.indexOf("@")>-1?t=this.genBones(a):a&&t.push(this.genStructure(a))}return[this.genBone(e,t)]},genSkeleton:function(){var e=[];return this.isLoading?e.push(this.genStructure()):e.push(Object(c["s"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},e):e},mapBones:function(e){return e.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(e){this.resetStyles(e),this.isLoading&&(e._initialStyle={display:e.style.display,transition:e.style.transition},e.style.setProperty("transition","none","important"))},onBeforeLeave:function(e){e.style.setProperty("display","none","important")},resetStyles:function(e){e._initialStyle&&(e.style.display=e._initialStyle.display||"",e.style.transition=e._initialStyle.transition,delete e._initialStyle)}},render:function(e){return e("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})},c6a6:function(e,t,a){"use strict";a("4de4"),a("7db0"),a("c975"),a("d81d"),a("45fc"),a("498a");var i=a("5530"),n=(a("2bfd"),a("b974")),s=a("8654"),o=a("d9f7"),l=a("80d2"),r=Object(i["a"])(Object(i["a"])({},n["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t["a"]=n["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,a){return a.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:n["a"].options.props.menuProps.type,default:function(){return r}},noFilter:Boolean,searchInput:{type:String,default:void 0}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var a=Object(l["r"])(t,e.itemText),i=null!=a?String(a):"";return e.filter(t,String(e.internalSearch),i)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch=e,this.$emit("update:search-input",e)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=n["a"].options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),Object(i["a"])(Object(i["a"])({},r),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(t){return e.valueComparator(e.getValue(t),e.getValue(e.internalValue))}))},listData:function(){var e=n["a"].options.computed.listData.call(this);return e.props=Object(i["a"])(Object(i["a"])({},e.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=void 0)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var a=this;e!==t&&(this.setMenuIndex(-1),this.$nextTick((function(){a.internalSearch&&(1===e.length||a.autoSelectFirst)&&(a.$refs.menu.getTiles(),a.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===l["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===l["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==l["y"].backspace&&e!==l["y"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var a=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===a){var i=this.selectedItems.length,n=e!==i-1?e:e-1,s=this.selectedItems[n];s?this.selectItem(t):this.setValue(this.multiple?[]:void 0),this.selectedIndex=n}else this.selectedIndex=a}},clearableCallback:function(){this.internalSearch=void 0,n["a"].options.methods.clearableCallback.call(this)},genInput:function(){var e=s["a"].options.methods.genInput.call(this);return e.data=Object(o["a"])(e.data,{attrs:{"aria-activedescendant":Object(l["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["p"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot:function(){var e=n["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections:function(){return this.hasSlot||this.multiple?n["a"].options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,a=t.value;t.value&&this.activateMenu(),this.internalSearch=a,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;n["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){n["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){n["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){n["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){if(-1!==this.selectedIndex){var t=this.selectedItems[this.selectedIndex],a=this.getText(t);e.clipboardData.setData("text/plain",a),e.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",a),e.preventDefault()}}}})}}]);
//# sourceMappingURL=chunk-11fad702.8c086f7c.js.map