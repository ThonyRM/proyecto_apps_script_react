const doGet = ()=>
    HtmlService.createTemplateFromFile("frontend/index")
        .evaluate()
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .addMetaTag(
            "viewport",
            'width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"'
          )
        .setTitle("Proyecto react - App script")
        .setFaviconUrl("https://cdn-icons-png.flaticon.com/128/4507/4507860.png");

const include  = (ruta) =>
    HtmlService.createHtmlOutputFromFile(ruta).getContent();

