(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{0:function(e,a){},15:function(e,a){},16:function(e,a){},"23ae":function(e,a,t){},"4fc5":function(a,t,o){"use strict";o.r(t);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"q-pa-md q-gutter-sm"},[t("q-breadcrumbs",{scopedSlots:e._u([{key:"separator",fn:function(){return[t("q-icon",{attrs:{size:"1.2em",name:"arrow_forward",color:"purple"}})]},proxy:!0}])},[t("q-breadcrumbs-el",{staticStyle:{cursor:"pointer"},attrs:{label:"Database",icon:"fas fa-database"},on:{click:function(a){return e.$router.push("/")}}}),t("q-breadcrumbs-el",{staticStyle:{cursor:"pointer"},attrs:{label:"Tables",icon:"fas fa-table"},on:{click:function(a){return e.$router.push("/tables")}}}),t("q-breadcrumbs-el",{attrs:{label:e.$route.params.tableName}})],1)],1),t("q-separator"),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("q-btn",{attrs:{size:"sm",color:"primary",flat:"",label:"New row"},on:{click:function(a){return e.showNewRowDrawer()}}}),t("q-btn",{attrs:{size:"sm",color:"primary",flat:"",label:"Table Permissions"},on:{click:function(a){return e.showPermissionsDrawer()}}}),t("q-btn",{attrs:{size:"sm",flat:"",label:"Table Options"}},[t("q-menu",{attrs:{anchor:"bottom left",self:"top left"}},[t("q-item",{attrs:{clickable:""}},[t("q-item-section",[t("q-checkbox",{attrs:{size:"xs",label:"Show column filters"},on:{input:function(a){return e.refreshData()}},model:{value:e.tabulatorOptions.headerFilter,callback:function(a){e.$set(e.tabulatorOptions,"headerFilter",a)},expression:"tabulatorOptions.headerFilter"}})],1)],1),t("q-item",{attrs:{clickable:""},on:{click:function(a){return e.refreshData()}}},[t("q-item-section",[e._v("Refresh data")])],1)],1)],1),e.selectedRows.length>0?t("q-btn",{attrs:{flat:"",color:"red",size:"sm"},on:{click:e.deleteSelectedRows}},[e._v("Delete selected\n        rows\n      ")]):e._e(),t("q-separator")],1),e._m(0),e.newRowDrawer?e._e():t("q-page-sticky",{attrs:{position:"bottom-right",offset:[20,20]}},[t("q-fab",{attrs:{"vertical-actions-align":"right",color:"primary",icon:"keyboard_arrow_up",direction:"up"}},[t("q-fab-action",{attrs:{color:"orange",label:"Download XLS",icon:"fas fa-file-excel"},on:{click:function(a){return e.downloadData("xls")}}}),t("q-fab-action",{attrs:{color:"orange",label:"Download CSV",icon:"fas fa-download"},on:{click:function(a){return e.downloadData("csv")}}}),t("q-fab-action",{attrs:{color:"orange",label:"Upload CSV/XLS",icon:"fas fa-upload"},on:{click:function(a){return e.$refs.fileUpload.pickFiles()}}},[t("q-file",{ref:"fileUpload",staticStyle:{display:"none"},on:{input:e.uploadFileSelected},model:{value:e.dataUploadFile,callback:function(a){e.dataUploadFile=a},expression:"dataUploadFile"}})],1)],1)],1)],1),t("q-drawer",{attrs:{side:"right",bordered:"",width:500,breakpoint:500,"content-class":"bg-grey-3"},model:{value:e.newRowDrawer,callback:function(a){e.newRowDrawer=a},expression:"newRowDrawer"}},[t("q-scroll-area",{staticClass:"fit"},[t("div",{staticClass:"q-pa-md"},[t("span",{staticClass:"text-h6"},[e._v("New "+e._s(e.$route.params.tableName))]),t("q-form",{staticClass:"q-gutter-md q-pa-md"},[e._l(e.newRowData,(function(a){return t("div",[["label","measurement","value","email"].indexOf(a.meta.ColumnType)>-1?t("q-input",{attrs:{label:a.meta.ColumnName,filled:""},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"column.value"}}):e._e(),a.meta.ColumnType.startsWith("file.")?t("q-file",{attrs:{filled:"","bottom-slots":"",label:a.meta.ColumnName,counter:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"cloud_upload"},on:{click:function(e){e.stopPropagation()}}})]},proxy:!0},{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){e.stopPropagation(),a.value=null}}})]},proxy:!0}],null,!0),model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"column.value"}}):e._e(),["password"].indexOf(a.meta.ColumnType)>-1?t("q-input",{attrs:{label:a.meta.ColumnName,type:"password",filled:""},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"column.value"}}):e._e(),"truefalse"===a.meta.ColumnType?t("q-toggle",{staticClass:"text-right",attrs:{label:a.meta.ColumnName},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"column.value"}}):e._e(),["content","json"].indexOf(a.meta.ColumnType)>-1?t("span",[e._v(e._s(a.meta.ColumnName))]):e._e(),["content","json"].indexOf(a.meta.ColumnType)>-1?t("q-editor",{attrs:{toolbar:[["viewsource"]],label:a.meta.ColumnName},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"column.value"}}):e._e(),["datetime"].indexOf(a.meta.ColumnType)>-1?t("q-date",{attrs:{subtitle:a.meta.ColumnName},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"column.value"}}):e._e()],1)})),t("div",[t("q-btn",{staticClass:"float-right",attrs:{label:"Save",color:"primary"},on:{click:e.onNewRow}}),t("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Cancel",color:"primary",flat:""},on:{click:e.onCancelNewRow}})],1)],2)],1)])],1),t("q-drawer",{attrs:{overlay:"",side:"right",bordered:"",width:400,breakpoint:1400,"content-class":"bg-grey-3"},model:{value:e.tablePermissionDrawer,callback:function(a){e.tablePermissionDrawer=a},expression:"tablePermissionDrawer"}},[e.newRowDrawer?e._e():t("q-scroll-area",{staticClass:"fit row"},[e.tableData?t("table-permissions",{attrs:{selectedTable:e.tableData},on:{close:function(a){e.tablePermissionDrawer=!1}}}):e._e()],1)],1)],1)},n=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col-12"},[t("div",{staticStyle:{height:"80vh"},attrs:{id:"spreadsheet"}})])}],r=(o("8e6e"),o("8a81"),o("456d"),o("f559"),o("ac6a"),o("cadf"),o("5df3"),o("551c"),o("06db"),o("aef6"),o("7f7f"),o("9523")),i=o.n(r),s=(o("28a5"),o("2f62")),c=o("1146"),u=o.n(c);function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){i()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}window.XLSX=u.a;var f="site.daptin.com"===window.location.hostname&&"8080"===window.location.port?"http://localhost:"+window.location.port:window.location.protocol+"//"+window.location.hostname+("80"===window.location.port?"":":"+window.location.port),p=o("39ab");p.prototype.extendModule("format","formatters",{image:function(e,a){console.log("format image cell",e);var t=e._cell.column,o=e._cell.row;if(o.data[t.field].length<1)return"null";var l=o.data[t.field][0];return console.log("Image data",l),"<img style='width: 300px; height: 200px' class='fileicon' src='data:"+l.type+";base64,"+l.contents+"'/>"},audio:function(e,a){console.log("format audio cell",e);var t=e._cell.column,o=e._cell.row;if(o.data[t.field].length<1)return"null";var l=o.data[t.field][0];return"<audio controls class='audio' src='data:"+l.type+";base64,"+l.contents+"'/>"},video:function(e,a){console.log("format video cell",e);var t=e._cell.column,o=e._cell.row;if(o.data[t.field].length<1)return"null";var l=o.data[t.field][0];return"<video controls style='width: 300px; height: 200px' class='video' src='data:"+l.type+";base64,"+l.contents+"'/>"},file:function(e,a){console.log("format video cell",e);var t=e._cell.column,o=e._cell.row;if(o.data[t.field].length<1)return"null";var l=o.data[t.field][0];return"<a href='"+f+"/asset/"+o.data.__type+"/"+o.data.reference_id+"/"+t.field+".'"+l.type.split("/")[1]+"></a>"}});var w={name:"EditData",methods:m(m({uploadFileSelected:function(a){var t=this;if(console.log("file selected",a,a.name),t.$q.loading.show(),a.name.endsWith(".xlsx")||a.name.endsWith(".csv")||a.name.endsWith(".xls")){var o=function(a){return console.log("File to read",a),new Promise((function(t,o){var l=a.name,n=a.type,r=new FileReader;r.onload=function(e){console.log("File loaded",e),t({name:l,file:e.target.result,type:n})},r.onerror=function(){console.log("Failed to load file onerror",e,arguments),o(l)},r.readAsDataURL(a)}))}(a);o.then((function(e){console.log("File read complete",e);var a={entity_name:t.$route.params.tableName},o="upload_csv_to_system_schema";e.name.endsWith("xlsx")||e.name.endsWith("xls")?(o="upload_xls_to_system_schema",a["data_xls_file"]=[e]):e.name.endsWith("csv")&&(a["data_csv_file"]=[e]),t.executeAction({tableName:"world",actionName:o,params:a}).then((function(e){t.$q.loading.hide(),console.log("File uploaded",e),t.$q.notify("Created table, updating schema"),setTimeout((function(){t.refreshData()}),1e3)})).catch((function(e){t.$q.loading.hide(),t.$q.notify("Failed to upload file "+JSON.stringify(e))}))})).catch((function(e){t.$q.notify({title:"Failed to upload file",message:JSON.stringify(e)})}))}else t.$q.notify({message:"Only XLSX/XLS or CSV files can be uploaded"})},showUploadData:function(){},downloadData:function(e){"csv"===e?this.spreadsheet.download("csv",this.$route.params.tableName+".csv"):"xls"===e&&this.spreadsheet.download("xlsx",this.$route.params.tableName+".xlsx",{sheetName:this.$route.params.tableName})},showPermissionsDrawer:function(){this.newRowDrawer=!1,this.tablePermissionDrawer=!0},showNewRowDrawer:function(){this.tablePermissionDrawer=!1,this.newRowDrawer=!0},deleteSelectedRows:function(){var e=this;0===this.selectedRows.length?this.$q.notify({message:"Select rows to delete"}):Promise.all(this.selectedRows.map((function(a){return e.deleteRow({tableName:e.$route.params.tableName,reference_id:a.reference_id})}))).then((function(){e.spreadsheet.setData()})).catch((function(a){e.$q.notify({message:a[0].title}),e.spreadsheet.setData()}))},onNewRow:function(){var e=this,a={},t=[];e.newRowData.map((function(e){e.meta.ColumnType.startsWith("file.")?(a[e.meta.ColumnName]=[],console.log("Create promise for file",e.value),t.push(function(t){return console.log("File to read",t),new Promise((function(o,l){var n=t.name,r=t.type,i=new FileReader;i.onload=function(t){console.log("File loaded",t),a[e.meta.ColumnName].push({name:n,file:t.target.result,type:r}),o()},i.onerror=function(){console.log("Failed to load file onerror",e,arguments),l(n)},i.readAsDataURL(t)}))}(e.value)),console.log("Asset set set column",e)):a[e.meta.ColumnName]=e.value})),console.log("Promises list",t),a["tableName"]=e.$route.params.tableName,Promise.all(t).then((function(){e.createRow(a).then((function(a){e.$q.notify({message:"Row created"}),e.spreadsheet.setData(),e.newRowData.map((function(e){e.value="",e.meta.ColumnType.startsWith("file.")?e.value=[]:"truefalse"===e.meta.ColumnType?e.value=!1:e.value=""})),e.newRowDrawer=!1})).catch((function(a){a instanceof Array?e.$q.notify({message:a[0].title}):e.$q.notify({message:"Failed to save row"})}))})).catch((function(a){console.log("Failed to upload file",a),e.$q.notify({message:"Failed to upload file: "+a[0]})}))},onCancelNewRow:function(){this.newRowDrawer=!1}},Object(s["b"])(["loadData","getTableSchema","updateRow","createRow","deleteRow","executeAction"])),{},{refreshData:function(){var e=this,a=[],t=this.$route.params.tableName;console.log("loaded data editor",t),e.getTableSchema(t).then((function(o){e.tableSchema=o,console.log("Schema",e.tableSchema);var l=Object.keys(e.tableSchema.ColumnModel).map((function(t){var o=e.tableSchema.ColumnModel[t];if(o.jsonApi||"__type"===o.ColumnName||e.defaultColumns.indexOf(o.ColumnName)>-1)return null;o.ColumnType.startsWith("file.")?(a.push(o.ColumnName),e.newRowData.push({meta:o,value:[]})):"truefalse"===o.ColumnType?e.newRowData.push({meta:o,value:!1}):e.newRowData.push({meta:o,value:""});var l="truefalse"===o.ColumnType?"tickCross":null,n=200;"content"!==o.ColumnType&&"json"!==o.ColumnType||(l="textarea",n=300);var r={title:o.Name,field:o.ColumnName,editor:!0,headerFilter:e.tabulatorOptions.headerFilter,editable:!o.ColumnType.startsWith("file."),formatter:l,width:n,hozAlign:"truefalse"===o.ColumnType?"center":"left",sorter:"measurement"===o.ColumnType?"number":null};return o.ColumnType.startsWith("file.")&&o.ColumnType.indexOf("jpg")>-1&&(r.formatter="image"),o.ColumnType.startsWith("file.")&&o.ColumnType.indexOf("mp4")>-1&&(r.formatter="video"),o.ColumnType.startsWith("file.")&&o.ColumnType.indexOf("mp3")>-1&&(r.formatter="audio"),r})).filter((function(e){return!!e}));console.log("Table columns",l),l.unshift({formatter:"rowSelection",titleFormatter:"rowSelection",align:"center",headerSort:!1}),e.spreadsheet=new p("#spreadsheet",{data:[],columns:l,tooltips:!0,ajaxSorting:!0,layout:"fitDataFill",ajaxFiltering:!0,paginationSizeSelector:!0,ajaxProgressiveLoad:"scroll",ajaxProgressiveLoadDelay:200,ajaxProgressiveLoadScrollMargin:600,index:"reference_id",history:!0,movableColumns:!0,rowSelectionChanged:function(a,t){console.log("row selection changed",a,t),e.selectedRows=a},paginationSize:100,cellEdited:function(a){var t=a._cell.row.data.reference_id,o=a._cell.column.field,l=a._cell.value;console.log("cell edited",t,arguments);var n={tableName:e.$route.params.tableName,id:t};n[o]=l,e.updateRow(n).then((function(){e.$q.notify({message:"Saved"})})).catch((function(a){e.$q.notify({message:"Failed to save"}),e.spreadsheet.undo()}))},ajaxURL:e.endpoint+"/api/"+t,ajaxURLGenerator:function(o,l,n){console.log("Generate request url ",o,l,n),l.headers={Authorization:"Bearer "+e.authToken};var r=e.endpoint+"/api/"+t+"?page[number]="+n.page+"&page[size]="+n.size+"&";if(n.sorters){for(var i="",s=0;s<n.sorters.length;s++){var c=n.sorters[s];i=i+("asc"===c.dir?"":"-")+c.field+","}i=i.substring(0,i.length-1),r=r+"sort="+i+"&"}if(n.filters){var u=[];for(var s in n.filters){var d=n.filters[s];switch(d.type){case"like":u.push({column:d.field,operator:"like",value:d.value});break;default:u.push({column:d.field,operator:d.type,value:d.value})}}r=r+"query="+JSON.stringify(u)+"&"}return a.length>0&&(r=r+"included_relations="+a.join(",")+"&"),console.log("Request url ",r),r},rowUpdated:function(e){console.log("Row edited",e)},ajaxResponse:function(e,a,t){return console.log("ajax call complete",e,a,t),{last_page:t.links.last_page,data:t.data.map((function(e){return e.attributes}))}}})})),e.loadData({tableName:"world",params:{query:JSON.stringify([{column:"table_name",operator:"is",value:t}]),included_relations:"user_account"}}).then((function(a){console.log("Table row",a,arguments),a.data&&1===a.data.length?e.tableData=a.data[0]:e.$q.notify({message:"Failed to load table metadata"})})).catch((function(a){console.log("Failed to load table metadata",a),e.$q.notify({message:"Failed to load table metadata"})}))}}),data:function(){return{dataUploadFile:null,tablePermissionDrawer:!1,currentPage:1,tabulatorOptions:{headerFilter:!1},currentPagination:{},defaultColumns:["updated_at","created_at","reference_id","permission"],tableSchema:{ColumnModel:[]},rows:[],tableData:null,newRowDrawer:!1,newRowData:[],selectedRows:[]}},computed:m({},Object(s["c"])(["endpoint","authToken"])),mounted:function(){this.refreshData()},watch:{}},b=w,h=(o("a4e4"),o("2877")),g=o("ead5"),v=o("0016"),y=o("079e"),_=o("eb85"),C=o("9c40"),q=o("4e73"),x=o("66e5"),D=o("4074"),S=o("8f8e"),k=o("de5e"),R=o("c294"),N=o("72db"),O=o("7d53"),F=o("9404"),$=o("4983"),T=o("0378"),P=o("27f9"),j=o("9564"),Q=o("d66b"),W=o("52ee"),U=o("eebe"),z=o.n(U),L=Object(h["a"])(b,l,n,!1,null,"aa6c4c80",null);t["default"]=L.exports;z()(L,"components",{QBreadcrumbs:g["a"],QIcon:v["a"],QBreadcrumbsEl:y["a"],QSeparator:_["a"],QBtn:C["a"],QMenu:q["a"],QItem:x["a"],QItemSection:D["a"],QCheckbox:S["a"],QPageSticky:k["a"],QFab:R["a"],QFabAction:N["a"],QFile:O["a"],QDrawer:F["a"],QScrollArea:$["a"],QForm:T["a"],QInput:P["a"],QToggle:j["a"],QEditor:Q["a"],QDate:W["a"]})},a4e4:function(e,a,t){"use strict";var o=t("23ae"),l=t.n(o);l.a}}]);