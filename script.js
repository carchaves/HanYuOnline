 

function mostrar(div,id){
            const checkboxes = document.getElementById(id)
            var dis = "none"
            if(checkboxes.checked){
                dis = "block";
            }
            document.getElementById(div).style.display = dis;
}
let diCh = {
    zhe: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36825.svg" title="这 ( zhe / zhè ) orden de los trazos" width="150" height="150"></object>',
    na:'<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/37027.svg" title="那 ( na / nà ) orden de los trazos" width="150" height="150"></object>',
    er:  '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20799.svg" title="儿 ( er / ér ) orden de los trazos" width="150" height="150"></object>',
    xue: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23398.svg" title="学 ( xue / xué ) orden de los trazos" width="150" height="150"></object>',
    sheng: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29983.svg" title="生 ( sheng / shēng ) orden de los trazos" width="150" height="150"></object>',
    yi:'<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21307.svg" title="医 ( yi / yī ) orden de los trazos" width="150" height="150"></object>',
    lao:'<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/32769.svg" title="老 ( lao / lăo ) orden de los trazos" width="150" height="150"></object>',
    shi_maestro:'<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24072.svg" title="师 ( shi / shī ) orden de los trazos" width="150" height="150"></object>',
    jiao:'<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25945.svg" title="教 ( jiao / jiāo ) orden de los trazos" width="150" height="150"></object>',
    shou:'<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25480.svg" title="授 ( shou / shòu ) orden de los trazos" width="150" height="150"></object>',
    ji: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35760.svg" title="记 ( ji / jì ) orden de los trazos" width="150" height="150"></object>',
    zhe_elque: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/32773.svg" title="者 ( zhe / zhĕ ) orden de los trazos" width="150" height="150"></object>',
    zhong: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20013.svg" title="中 ( zhong / zhōng ) orden de los trazos" width="150" height="150"></object>',
    guo: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22269.svg" title="国 ( guo / guó ) orden de los trazos" width="150" height="150"></object>',
    mei: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/32654.svg" title="美 ( mei / mĕi ) orden de los trazos" width="150" height="150"></object>',
    ying: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/33521.svg" title="英 ( ying / yīng ) orden de los trazos" width="150" height="150"></object>',
    jia: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21152.svg" title="加 ( jia / jiā ) orden de los trazos" width="150" height="150"></object>',
    na_canada: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25343.svg" title="拿 ( na / ná ) orden de los trazos" width="150" height="150"></object>',
    da: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22823.svg" title="大 ( da / dà ) orden de los trazos" width="150" height="150"></object>',
    ri: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26085.svg" title="日 ( ri / rì ) orden de los trazos" width="150" height="150"></object>',
    ben: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26412.svg" title="本 ( ben / bĕn ) orden de los trazos" width="150" height="150"></object>',
    e: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20420.svg" title="俄 ( e / é ) orden de los trazos" width="150" height="150"></object>',
    fa: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/27861.svg" title="法 ( fa / fă ) orden de los trazos" width="150" height="150"></object>',
    can: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/39184.svg" title="餐 ( can / cān ) orden de los trazos" width="150" height="150"></object>',
    ting: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21381.svg" title="厅 ( ting / tīng ) orden de los trazos" width="150" height="150"></object>',
    yuan: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/38498.svg" title="院 ( yuan / yuàn ) orden de los trazos" width="150" height="150"></object>',
    she: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/33293.svg" title="舍 ( she / shè ) orden de los trazos" width="150" height="150"></object>',
    su: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23487.svg" title="宿 ( su / sù ) orden de los trazos" width="150" height="150"></object>',
    ce: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21397.svg" title="厕 ( ce / cè ) orden de los trazos" width="150" height="150"></object>',
    suo: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25152.svg" title="所 ( suo / suŏ ) orden de los trazos" width="150" height="150"></object>',
    ceng: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23618.svg" title="层 ( ceng / céng ) orden de los trazos" width="150" height="150"></object>',
    zai_otravez: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20877.svg" title="再 ( zai / zài ) orden de los trazos" width="150" height="150"></object>',
    dou: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/37117.svg" title="都 ( dou / dōu ) orden de los trazos" width="150" height="150"></object>',
    hen: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24456.svg" title="很 ( hen / hĕn ) orden de los trazos" width="150" height="150"></object>',
    ye: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20063.svg" title="也 ( ye / yĕ ) orden de los trazos" width="150" height="150"></object>',
    na_cual: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21738.svg" title="哪 ( na / nă ) orden de los trazos" width="150" height="150"></object>',
    shen: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20160.svg" title="什 ( shen / shén ) orden de los trazos" width="150" height="150"></object>',
    me: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20040.svg" title="么 ( me ) orden de los trazos" width="150" height="150"></object>',
    shei: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35841.svg" title="谁 ( shei / shéi ) orden de los trazos" width="150" height="150"></object>',
    wen: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25991.svg" title="文 ( wen / wén ) orden de los trazos" width="150" height="150"></object>',
    yu: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35821.svg" title="语 ( yu / yŭ ) orden de los trazos" width="150" height="150"></object>',
    qing: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35831.svg" title="请 ( qing / qĭng ) orden de los trazos" width="150" height="150"></object>',
    wen_preguntar: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/38382.svg" title="问 ( wen / wèn ) orden de los trazos" width="150" height="150"></object>',
    shi: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26159.svg" title="是 ( shi / shì ) orden de los trazos" width="150" height="150"></object>',
    ke: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21487.svg" title="可 ( ke / kĕ ) orden de los trazos" width="150" height="150"></object>',
    yi_uso: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20197.svg" title="以 ( yi / yĭ ) orden de los trazos" width="150" height="150"></object>',
    zai: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22312.svg" title="在 ( zai / zài ) orden de los trazos" width="150" height="150"></object>',
    jiao_llamar: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21483.svg" title="叫 ( jiao / jiào ) orden de los trazos" width="150" height="150"></object>', 
    xing: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22995.svg" title="姓 ( xing / xìng ) orden de los trazos" width="150" height="150"></object>',
    zhi: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/30693.svg" title="知 ( zhi / zhī ) orden de los trazos" width="150" height="150"></object>',
    dao: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36947.svg" title="道 ( dao / dào ) orden de los trazos" width="150" height="150"></object>',
    ren: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35748.svg" title="认 ( ren / rèn ) orden de los trazos" width="150" height="150"></object>',
    shi_reconocer: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35782.svg" title="识 ( shi / shí ) orden de los trazos" width="150" height="150"></object>',
    jin: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36827.svg" title="进 ( jin / jìn ) orden de los trazos" width="150" height="150"></object>',
    lai: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26469.svg" title="来 ( lai / lái ) orden de los trazos" width="150" height="150"></object>',
    xi_practica: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20064.svg" title="习 ( xi / xí ) orden de los trazos" width="150" height="150"></object>',
    gao: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/39640.svg" title="高 ( gao / gāo ) orden de los trazos" width="150" height="150"></object>,',
    xing_feliz: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20852.svg" title="兴 ( xing / xìng ) orden de los trazos" width="150" height="150"></object>',
    xiao: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23567.svg" title="小 ( xiao / xiăo ) orden de los trazos" width="150" height="150"></object>',
    hao: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22909.svg" title="好 ( hao / hăo ) orden de los trazos" width="150" height="150"></object>',
    wan: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26202.svg" title="晚 ( wan / wăn ) orden de los trazos" width="150" height="150"></object>',
    xie: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35874.svg" title="谢 ( xie / xiè ) orden de los trazos" width="150" height="150"></object>',
    dui: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23545.svg" title="对 ( dui / duì ) orden de los trazos" width="150" height="150"></object>',
    bu: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/19981.svg" title="不 ( bu / bù ) orden de los trazos" width="150" height="150"></object>',
    qi: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36215.svg" title="起 ( qi / qĭ ) orden de los trazos" width="150" height="150"></object>',
    mei_no: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/27809.svg" title="没 ( mei / méi ) orden de los trazos" width="150" height="150"></object>',
    guan: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20851.svg" title="关 ( guan / guān ) orden de los trazos" width="150" height="150"></object>',
    xi: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/31995.svg" title="系 ( xi / xì ) orden de los trazos" width="150" height="150"></object>',
    nin: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24744.svg" title="您 ( nin / nín ) orden de los trazos" width="150" height="150"></object>',
    gui: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36149.svg" title="贵 ( gui / guì ) orden de los trazos" width="150" height="150"></object>',
    jian: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35265.svg" title="见 ( jian / jiàn ) orden de los trazos" width="150" height="150"></object>',
    he: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21917.svg" title="喝 ( he / hē ) orden de los trazos" width="150" height="150"></object>',
    nan: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/30007.svg" title="男 ( nan / nán ) orden de los trazos" width="150" height="150"></object>',
    nu: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22899.svg" title="女 ( nü / nǚ ) orden de los trazos" width="150" height="150"></object>',
    shi_erudito: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22763.svg" title="士 ( shi / shì ) orden de los trazos" width="150" height="150"></object>',
    tai: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22826.svg" title="太 ( tai / tài ) orden de los trazos" width="150" height="150"></object>',
    peng: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26379.svg" title="朋 ( peng / péng ) orden de los trazos" width="150" height="150"></object>',
    you: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21451.svg" title="友 ( you / yŏu ) orden de los trazos" width="150" height="150"></object>',
    jie: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22992.svg" title="姐 ( jie / jiĕ ) orden de los trazos" width="150" height="150"></object>',
    mei_hermana: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22969.svg" title="妹 ( mei / mèi ) orden de los trazos" width="150" height="150"></object>',
    ge: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21733.svg" title="哥 ( ge / gē ) orden de los trazos" width="150" height="150"></object>',
    di: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24351.svg" title="弟 ( di / dì ) orden de los trazos" width="150" height="150"></object>',
    xian: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20808.svg" title="先 ( xian / xiān ) orden de los trazos" width="150" height="150"></object>',
    wai: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22806.svg" title="外 ( wai / wài ) orden de los trazos" width="150" height="150"></object>',
    po: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23110.svg" title="婆 ( po / pó ) orden de los trazos" width="150" height="150"></object>',
    nai: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22902.svg" title="奶 ( nai / năi ) orden de los trazos" width="150" height="150"></object>',
    gong: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20844.svg" title="公 ( gong / gōng ) orden de los trazos" width="150" height="150"></object>',
    ye_abuelo: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29239.svg" title="爷 ( ye / yé ) orden de los trazos" width="150" height="150"></object>',
    ba: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29240.svg" title="爸 ( ba / bà ) orden de los trazos" width="150" height="150"></object>',
    ma: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22920.svg" title="妈 ( ma / mā ) orden de los trazos" width="150" height="150"></object>',
    han: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/27721.svg" title="汉 ( han / hàn ) orden de los trazos" width="150" height="150"></object>',
    a: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/38463.svg" title="阿 ( a / ā ) orden de los trazos" width="150" height="150"></object>',
    gen: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26681.svg" title="根 ( gen / gēn ) orden de los trazos" width="150" height="150"></object>',
    ting_argentina: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24311.svg" title="廷 ( ting / tíng ) orden de los trazos" width="150" height="150"></object>',
    qu: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21435.svg" title="去 ( qu / qù ) orden de los trazos" width="150" height="150"></object>',
    you_nadar: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/28216.svg" title="游 ( you / yóu ) orden de los trazos" width="150" height="150"></object>',
    yong: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/27891.svg" title="泳 ( yong / yŏng ) orden de los trazos" width="150" height="150"></object>',
    zuo: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26152.svg" title="昨 ( zuo / zuó ) orden de los trazos" width="150" height="150"></object>',
    tian: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22825.svg" title="天 ( tian / tiān ) orden de los trazos" width="150" height="150"></object>',
    jing: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20140.svg" title="京 ( jing / jīng ) orden de los trazos" width="150" height="150"></object>',
    ju: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21095.svg" title="剧 ( ju / jù ) orden de los trazos" width="150" height="150"></object>',
    zen: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24590.svg" title="怎 ( zen / zĕn ) orden de los trazos" width="150" height="150"></object>',
    yang: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26679.svg" title="样 ( yang / yàng ) orden de los trazos" width="150" height="150"></object>',
    you_tener: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26377.svg" title="有 ( you / yŏu ) orden de los trazos" width="150" height="150"></object>',
    yi_interesante: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24847.svg" title="意 ( yi / yì ) orden de los trazos" width="150" height="150"></object>',
    si: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24605.svg" title="思 ( si / sī ) orden de los trazos" width="150" height="150"></object>',
    jin_hoy: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20170.svg" title="今 ( jin / jīn ) orden de los trazos" width="150" height="150"></object>',
    qi_cielo: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/27668.svg" title="气 ( qi / qì ) orden de los trazos" width="150" height="150"></object>',
    shi_tiempo: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26102.svg" title="时 ( shi / shí ) orden de los trazos" width="150" height="150"></object>',
    hou: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20505.svg" title="候 ( hou / hòu ) orden de los trazos" width="150" height="150"></object>',
    xian_ahora: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29616.svg" title="现 ( xian / xiàn ) orden de los trazos" width="150" height="150"></object>',
    ming: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26126.svg" title="明 ( ming / míng ) orden de los trazos" width="150" height="150"></object>',
    jian_tiempo: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/38388.svg" title="间 ( jian / jiān ) orden de los trazos" width="150" height="150"></object>',
    shuo_hablar: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35828.svg" title="说 ( shuo / shuō ) orden de los trazos"></object>',
    bian: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36941.svg" title="遍 ( bian / biàn ) orden de los trazos" width="150" height="150"></object>',
    da_jugar: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25171.svg" title="打 ( da / dă ) orden de los trazos" width="150" height="150"></object>',
    qiu: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29699.svg" title="球 ( qiu / qiú ) orden de los trazos" width="150" height="150"></object>',
    bao: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25265.svg" title="抱 ( bao / bào ) orden de los trazos" width="150" height="150"></object>',
    qian: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/27465.svg" title="歉 ( qian / qiàn ) orden de los trazos" width="150" height="150"></object>',
    kong: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24656.svg" title="恐 ( kong / kŏng ) orden de los trazos" width="150" height="150"></object>',
    pa: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24597.svg" title="怕 ( pa / pà ) orden de los trazos" width="150" height="150"></object>',
    xing_estar_bien: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/34892.svg" title="行 ( xing / xíng ) orden de los trazos" width="150" height="150"></object>',
    kai1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24320.svg" title="开 ( kai / kāi ) orden de los trazos"></object>',
    kan4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/30475.svg" title="看 ( kan / kàn ) orden de los trazos"></object>',
    wen4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/38382.svg" title="问 ( wen / wèn ) orden de los trazos"></object>',
    yi1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/19968.svg" title="一 ( yi / yī ) orden de los trazos"></object>',
    xia4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/19979.svg" title="下 ( xia / xià ) orden de los trazos"></object>',
    ming2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21517.svg" title="名 ( ming / míng ) orden de los trazos"></object>',
    pian4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29255.svg" title="片 ( pian / piàn ) orden de los trazos"></object>',
    a4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21834.svg" title="啊 ( a / à ) orden de los trazos"></object>',
    ding1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/19969.svg" title="丁 ( ding / dīng ) orden de los trazos"></object>',
    li4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21147.svg" title="力 ( li / lì ) orden de los trazos"></object>',
    bo1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/27874.svg" title="波 ( bo / bō ) orden de los trazos"></object>',
    zhang1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24352.svg" title="张 ( zhang / zhāng ) orden de los trazos"></object>',
    jie4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20171.svg" title="介 ( jie / jiè ) orden de los trazos"></object>',
    shao4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/32461.svg" title="绍 ( shao / shào ) orden de los trazos"></object>',
    zi4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23383.svg" title="字 ( zi / zì ) orden de los trazos"></object>',
    zhuan1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/19987.svg" title="专 ( zhuan / zhuān ) orden de los trazos"></object>',
    ye4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/19994.svg" title="业 ( ye / yè ) orden de los trazos"></object>',
    shu4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26415.svg" title="术 ( shu / shù ) orden de los trazos"></object>',
    ma3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/39532.svg" title="马 ( ma / mă ) orden de los trazos"></object>',
    wei2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20026.svg" title="为 ( wei / wèi ) orden de los trazos"></object>',
    hua4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21270.svg" title="化 ( hua / huà ) orden de los trazos"></object>',
    li2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21382.svg" title="历 ( li / lì ) orden de los trazos"></object>',
    shi3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21490.svg" title="史 ( shi / shĭ ) orden de los trazos"></object>',
    zhe4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21746.svg" title="哲 ( zhe / zhé ) orden de los trazos"></object>',
    yin1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/38899.svg" title="音 ( yin / yīn ) orden de los trazos"></object>',
    yue4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20048.svg" title="乐 ( le / lè ) orden de los trazos"></object>',
    jing1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/32463.svg" title="经 ( jing / jīng ) orden de los trazos"></object>',
    ji4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/27982.svg" title="济 ( ji / jì ) orden de los trazos"></object>',
    shu4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25968.svg" title="数 ( shu / shŭ ) orden de los trazos"></object>',
    wu4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25968.svg" title="数 ( shu / shŭ ) orden de los trazos"></object>',
    li3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29702.svg" title="理 ( li / lĭ ) orden de los trazos"></object>',
    yu4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/32946.svg" title="育 ( yu / yù ) orden de los trazos"></object>',
    xuan3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36873.svg" title="选 ( xuan / xuăn ) orden de los trazos"></object>',
    xiu1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20462.svg" title="修 ( xiu / xiū ) orden de los trazos"></object>',
    jia1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23478.svg" title="家 ( jia / jiā ) orden de los trazos"></object>',
    ji3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20960.svg" title="几 ( ji / jĭ ) orden de los trazos"></object>',
    kou3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21475.svg" title="口 ( kou / kŏu ) orden de los trazos"></object>',
    zhao4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29031.svg" title="照 ( zhao / zhào ) orden de los trazos"></object>',
    he2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21644.svg" title="和 ( he / hé ) orden de los trazos"></object>',
    ge4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20010.svg" title="个 ( ge / gè ) orden de los trazos"></object>',
    liang: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20004.svg" title="两 ( liang / liăng ) orden de los trazos"></object>',
    gong4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20849.svg" title="共 ( gong / gòng ) orden de los trazos"></object>',
    gou3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29399.svg" title="狗 ( gou / gŏu ) orden de los trazos"></object>',
    dang1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24403.svg" title="当 ( dang / dāng ) orden de los trazos"></object>',
    ran2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/28982.svg" title="然 ( ran / rán ) orden de los trazos"></object>',
    zhen1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/30495.svg" title="真 ( zhen / zhēn ) orden de los trazos"></object>',
    ai4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29233.svg" title="爱 ( ai / ài ) orden de los trazos"></object>',
    zuo4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20570.svg" title="做 ( zuo / zuò ) orden de los trazos"></object>',
    gong1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24037.svg" title="工 ( gong / gōng ) orden de los trazos"></object>',
    zuo4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20316.svg" title="作 ( zuo / zuò ) orden de los trazos"></object>',
    wang2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29579.svg" title="王 ( wang / wáng ) orden de los trazos"></object>',
    yun2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20113.svg" title="云 ( yun / yún ) orden de los trazos"></object>',
    bei4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36125.svg" title="贝 ( bei / bèi ) orden de los trazos"></object>',
    duo1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22810.svg" title="多 ( duo / duō ) orden de los trazos"></object>',
    shao3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23569.svg" title="少 ( shao / shăo ) orden de los trazos"></object>',
    xi3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21916.svg" title="喜 ( xi / xĭ ) orden de los trazos"></object>',
    huan1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/27426.svg" title="欢 ( huan / huān ) orden de los trazos"></object>',
    bai3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/30334.svg" title="百 ( bai / băi ) orden de los trazos"></object>',
    che1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36710.svg" title="车 ( che / chē ) orden de los trazos"></object>',
    ci2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35789.svg" title="词 ( ci / cí ) orden de los trazos"></object>',
    dian3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20856.svg" title="典 ( dian / diăn ) orden de los trazos"></object>',
    dian4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/30005.svg" title="电 ( dian / diàn ) orden de los trazos"></object>',
    nao3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/33041.svg" title="脑 ( nao / năo ) orden de los trazos"></object>',
    hai2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23401.svg" title="孩 ( hai / hái ) orden de los trazos"></object>',
    zi3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23376.svg" title="子 ( zi / zĭ ) orden de los trazos"></object>',
    zhu3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20027.svg" title="主 ( zhu / zhŭ ) orden de los trazos"></object>',
    ren2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20219.svg" title="任 ( ren / rèn ) orden de los trazos"></object>',
    zhu2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21161.svg" title="助 ( zhu / zhù ) orden de los trazos"></object>',
    lu2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24459.svg" title="律 ( lü / lǜ ) orden de los trazos"></object>',
    cheng3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/31243.svg" title="程 ( cheng / chéng ) orden de los trazos"></object>',
    hai2_ademas: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36824.svg" title="还 ( hai / hái ) orden de los trazos"></object>'

}
let caracteresPinyinTraduccion = [

    //PRONOMBRES DEMOSTRATIVOS------------------------------------------------
    {   
        categoria: "pron dem",
        //pinyin
        pinyin: 'zhè',        
        //traduccion
        traduccion: 'este, esto',
        //caracter
        caracter: diCh.zhe

    },
    {   
        categoria: "pron dem",
        //pinyin
        pinyin: 'nà',        
        //traduccion
        traduccion: 'aquel',
        //caracter
        caracter: diCh.na

    },
    {   
        categoria: "pron dem",
        //pinyin
        pinyin: 'zhèr',        
        //traduccion
        traduccion: 'aquí/acá',
        //caracter
        caracter: diCh.zhe + diCh.er

    },
    {   
        categoria: "pron dem",
        //pinyin
        pinyin: 'nàr',        
        //traduccion
        traduccion: 'allá/ahí/allí',
        //caracter
        caracter: diCh.na + diCh.er

    },
    //ESTUDIO------------------------------------------------------------------
    {   
        categoria: "estudio",
        //pinyin
        pinyin: 'xué',        
        //traduccion
        traduccion: 'estudio',
        //caracter
        caracter: diCh.xue

    },
    {   
        categoria: "estudio",
        //pinyin
        pinyin: 'xuéxí',        
        //traduccion
        traduccion: 'estudiar',
        //caracter
        caracter: diCh.xue + diCh.xi_practica

    },
    {   
        categoria: "estudio",
        //pinyin
        pinyin: 'xuésheng',        
        //traduccion
        traduccion: 'estudiante',
        //caracter
        caracter: diCh.xue + diCh.sheng

    },
    {   
        categoria: "estudio",
        //pinyin
        pinyin: 'xuéyuàn',        
        //traduccion
        traduccion: 'institución educativa',
        //caracter
        caracter: diCh.xue + diCh.yuan 

    },
    {   
        categoria: "estudio",
        //pinyin
        pinyin: 'xiăoxué',        
        //traduccion
        traduccion: 'primaria',
        //caracter
        caracter: diCh.xiao + diCh.xue
    },
    {   
        categoria: "estudio",
        //pinyin
        pinyin: 'zhōngxué',        
        //traduccion
        traduccion: 'secundaria',
        //caracter
        caracter: diCh.zhong + diCh.xue

    },
    {   
        categoria: "estudio",
        //pinyin
        pinyin: 'dàxué',        
        //traduccion
        traduccion: 'universidad',
        //caracter
        caracter: diCh.da + diCh.xue

    },
    //PROFESIONES---------------------------------------------------------------
    {   
        categoria: "profesiones",
        //pinyin
        pinyin: 'yīshēng',        
        //traduccion
        traduccion: 'médico/a // doctor/a',
        //caracter
        caracter: diCh.yi + diCh.sheng

    },
    {   
        categoria: "profesiones",
        //pinyin
        pinyin: 'lăoshī',        
        //traduccion
        traduccion: 'maestro/a',
        //caracter
        caracter: diCh.lao + diCh.shi_maestro

    },
    {   
        categoria: "profesiones",
        //pinyin
        pinyin: 'jiàoshòu',        
        //traduccion
        traduccion: 'profesor/a',
        //caracter
        caracter: diCh.jiao + diCh.shou

    },
    {   
        categoria: "profesiones",
        //pinyin
        pinyin: 'jìzhĕ',        
        //traduccion
        traduccion: 'periodista',
        //caracter
        caracter: diCh.ji + diCh.zhe_elque

    },
    //PAISES-------------------------------------------------------------------
    {   
        categoria: "paises",
        //pinyin
        pinyin: 'Zhōngguó',        
        //traduccion
        traduccion: 'China',
        //caracter
        caracter: diCh.zhong +diCh.guo

    },
    {   
        categoria: "paises",
        //pinyin
        pinyin: 'Āgēntíng',        
        //traduccion
        traduccion: 'Argentina',
        //caracter
        caracter: diCh.a + diCh.gen + diCh.ting_argentina
    },
    {   
        categoria: "paises",
        //pinyin
        pinyin: 'Mĕiguó',        
        //traduccion
        traduccion: 'USA',
        //caracter
        caracter: diCh.mei + diCh.guo

    },
    {   
        categoria: "paises",
        //pinyin
        pinyin: 'Yīngguó',        
        //traduccion
        traduccion: 'Gran Bretaña',
        //caracter
        caracter: diCh.ying +diCh.guo

    },
    {   
        categoria: "paises",
        //pinyin
        pinyin: 'Jiānádà',        
        //traduccion
        traduccion: 'Canadá',
        //caracter
        caracter: diCh.jia + diCh.na_canada +diCh.da

    },
    {   
        categoria: "paises",
        //pinyin
        pinyin: 'Rìbĕn',        
        //traduccion
        traduccion: 'Japón',
        //caracter
        caracter: diCh.ri + diCh.ben

    },
    {   
        categoria: "paises",
        //pinyin
        pinyin: 'éguó',        
        //traduccion
        traduccion: 'Rusia',
        //caracter
        caracter: diCh.e +diCh.guo

    },
    {   
        categoria: "paises",
        //pinyin
        pinyin: 'Făguó',        
        //traduccion
        traduccion: 'Francia',
        //caracter
        caracter: diCh.fa +diCh.guo

    },
    //LUGARES-----------------------------------------------------------------
    {   
        categoria: "lugares",
        //pinyin
        pinyin: 'cāntīng',        
        //traduccion
        traduccion: 'comedor',
        //caracter
        caracter: diCh.can +diCh.ting

    },
    {   
        categoria: "lugares",
        //pinyin
        pinyin: 'sushè',        
        //traduccion
        traduccion: 'dormitorio',
        //caracter
        caracter: diCh.su + diCh.she

    },
    {   
        categoria: "lugares",
        //pinyin
        pinyin: 'cèsuŏ',        
        //traduccion
        traduccion: 'baño',
        //caracter
        caracter: diCh.ce + diCh.suo

    },
    {   
        categoria: "lugares",
        //pinyin
        pinyin: 'céng',        
        //traduccion
        traduccion: 'piso',
        //caracter
        caracter: diCh.ceng

    },
    //ADJETIVOS--------------------------------------------------------
    {   
        categoria: "adjetivos",
        //pinyin
        pinyin: 'dōu',        
        //traduccion
        traduccion: 'todo/todos/ambos',
        //caracter
        caracter: diCh.dou

    },
    {   
        categoria: "adjetivos",
        //pinyin
        pinyin: 'hĕn',        
        //traduccion
        traduccion: 'mucho',
        //caracter
        caracter: diCh.hen

    },
    {   
        categoria: "adjetivos",
        //pinyin
        pinyin: 'gāoxìng',        
        //traduccion
        traduccion: 'encantado',
        //caracter
        caracter: diCh.gao + diCh.xing_feliz

    },
    {   
        categoria: "adjetivos",
        //pinyin
        pinyin: 'dà',        
        //traduccion
        traduccion: 'grande',
        //caracter
        caracter: diCh.da

    },
    {   
        categoria: "adjetivos",
        //pinyin
        pinyin: 'xiăo',        
        //traduccion
        traduccion: 'pequeño',
        //caracter
        caracter: diCh.xiao

    },
    {   
        categoria: "adjetivos",
        //pinyin
        pinyin: 'hăo',        
        //traduccion
        traduccion: 'bueno/bien',
        //caracter
        caracter: diCh.hao

    },
    {   
        categoria: "adjetivos",
        //pinyin
        pinyin: 'wán',        
        //traduccion
        traduccion: 'tarde',
        //caracter
        caracter: diCh.wan

    },
    //ADVERBIOS-----------------------------------------------------------------
    {   
        categoria: "adverbio",
        //pinyin
        pinyin: 'yĕ',        
        //traduccion
        traduccion: 'también',
        //caracter
        caracter: diCh.ye

    },
    {   
        categoria: "adverbio inter",
        //pinyin
        pinyin: 'năr',        
        //traduccion
        traduccion: 'dónde',
        //caracter
        caracter: diCh.na_cual + diCh.er

    },
    {   
        categoria: "adverbio inter",
        //pinyin
        pinyin: 'nă',        
        //traduccion
        traduccion: 'cuál',
        //caracter
        caracter: diCh.na_cual

    },
    {   
        categoria: "adverbio inter",
        //pinyin
        pinyin: 'shénme',        
        //traduccion
        traduccion: 'qué',
        //caracter
        caracter: diCh.shen + diCh.me

    },
    {   
        categoria: "adverbio inter",
        //pinyin
        pinyin: 'shéi',        
        //traduccion
        traduccion: 'quién',
        //caracter
        caracter: diCh.shei

    },
    //IDIOMAS---------------------------------------------------------------------------
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'Zhōngwén',        
        //traduccion
        traduccion: 'idioma chino',
        //caracter
        caracter: diCh.zhong + diCh.wen

    },
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'Hànyŭ',        
        //traduccion
        traduccion: 'idioma chino (idioma de los han)',
        //caracter
        caracter: diCh.han + diCh.yu

    },
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'Yīngwén',        
        //traduccion
        traduccion: 'idioma inglés',
        //caracter
        caracter: diCh.ying + diCh.wen

    },
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'Yīngyŭ',        
        //traduccion
        traduccion: 'idioma inglés',
        //caracter
        caracter: diCh.ying + diCh.yu

    },
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'Rìwén',        
        //traduccion
        traduccion: 'idioma japonés',
        //caracter
        caracter: diCh.ri + diCh.wen

    },
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'Rìyŭ',
        //traduccion
        traduccion: 'idioma japonés',
        //caracter
        caracter: diCh.ri + diCh.yu

    },
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'èwén',        
        //traduccion
        traduccion: 'idioma ruso',
        //caracter
        caracter: diCh.e + diCh.wen

    },
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'èyŭ',        
        //traduccion
        traduccion: 'idioma ruso',
        //caracter
        caracter: diCh.e + diCh.yu

    },
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'Făyŭ',        
        //traduccion
        traduccion: 'idioma francés',
        //caracter
        caracter: diCh.fa + diCh.yu

    },
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'Făwén',        
        //traduccion
        traduccion: 'idioma francés',
        //caracter
        caracter: diCh.fa + diCh.wen

    },
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'wàiwèn',        
        //traduccion
        traduccion: 'idioma extranjero',
        //caracter
        caracter: diCh.wai + diCh.wen

    },
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'wàiyŭ',        
        //traduccion
        traduccion: 'idioma extranjero',
        //caracter
        caracter: diCh.wai + diCh.yu

    },
    //VERBOS--------------------------------------------------------------------------
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'shì',        
        //traduccion
        traduccion: 'ser',
        //caracter
        caracter: diCh.shi

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'wèn',        
        //traduccion
        traduccion: 'preguntar',
        //caracter
        caracter: diCh.wen_preguntar

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'kĕyĭ',        
        //traduccion
        traduccion: 'poder',
        //caracter
        caracter: diCh.ke + diCh.yi_uso

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'zài',        
        //traduccion
        traduccion: 'estar',
        //caracter
        caracter: diCh.zai

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'jiào',        
        //traduccion
        traduccion: 'llamarse/nombre',
        //caracter
        caracter: diCh.jiao_llamar

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'xìng',        
        //traduccion
        traduccion: 'apellidarse/apellido',
        //caracter
        caracter: diCh.xing

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'zhīdao',        
        //traduccion
        traduccion: 'saber',
        //caracter
        caracter: diCh.zhi + diCh.dao

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'rènshi',        
        //traduccion
        traduccion: 'conocer',
        //caracter
        caracter: diCh.ren + diCh.shi_reconocer

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'jìn',        
        //traduccion
        traduccion: 'entrar',
        //caracter
        caracter: diCh.jin

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'lái',        
        //traduccion
        traduccion: 'venir',
        //caracter
        caracter: diCh.lai

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'jìnlái',        
        //traduccion
        traduccion: 'entrar',
        //caracter
        caracter: diCh.jin + diCh.lai

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'hē',        
        //traduccion
        traduccion: 'beber',
        //caracter
        caracter: diCh.he

    },
    //ETIQUETA---------------------------------------------------------------------------
    {   
        categoria: "etiqueta",
        //pinyin
        pinyin: 'xièxie',        
        //traduccion
        traduccion: 'gracias',
        //caracter
        caracter:  diCh.xie + diCh.xie

    },
    {   
        categoria: "etiqueta",
        //pinyin
        pinyin: 'duì bùqĭ',        
        //traduccion
        traduccion: 'perdón/ lo siento',
        //caracter
        caracter: diCh.dui + diCh.bu + diCh.qi

    },
    {   
        categoria: "etiqueta",
        //pinyin
        pinyin: 'qĭngwèn',        
        //traduccion
        traduccion: 'porfavor una pregunta',
        //caracter
        caracter: diCh.qing + diCh.wen_preguntar

    },
    {   
        categoria: "etiqueta",
        //pinyin
        pinyin: 'méi guānxi',        
        //traduccion
        traduccion: 'no pasa nada',
        //caracter
        caracter: diCh.mei_no + diCh.guan  + diCh.xi

    },
    {   
        categoria: "etiqueta",
        //pinyin
        pinyin: 'nín guì xìng',        
        //traduccion
        traduccion: 'su nombre?',
        //caracter
        caracter:  diCh.nin + diCh.gui + diCh.xing

    },
    {   
        categoria: "etiqueta",
        //pinyin
        pinyin: 'zàijiàn ',        
        //traduccion
        traduccion: 'adiós',
        //caracter
        caracter: diCh.zai_otravez + diCh.jian

    },
    {   
        categoria: "etiqueta",
        //pinyin
        pinyin: 'zài ',        
        //traduccion
        traduccion: 'otra vez',
        //caracter
        caracter: diCh.zai_otravez

    },
    //PERSONAS---------------------------------------------------------------------------------
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'nán',        
        //traduccion
        traduccion: 'hombre',
        //caracter
        caracter: diCh.nan

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'nǚ',        
        //traduccion
        traduccion: 'mujer',
        //caracter
        caracter: diCh.nu

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'nánshì',        
        //traduccion
        traduccion: 'hombre',
        //caracter
        caracter: diCh.nan + diCh.shi_erudito

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'nǚshì',        
        //traduccion
        traduccion: 'mujer',
        //caracter
        caracter: diCh.nu + diCh.shi_erudito

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'tàitai',        
        //traduccion
        traduccion: 'señora',
        //caracter
        caracter: diCh.tai + diCh.tai

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'nánpéngyou',        
        //traduccion
        traduccion: 'novio',
        //caracter
        caracter: diCh.nan + diCh.peng + diCh.you

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'nǚpéngyou',        
        //traduccion
        traduccion: 'novia',
        //caracter
        caracter: diCh.nu + diCh.peng + diCh.you

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'jiĕjie',        
        //traduccion
        traduccion: 'hermana mayor',
        //caracter
        caracter: diCh.jie + diCh.jie

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'mèimei',        
        //traduccion
        traduccion: 'hermana menor',
        //caracter
        caracter: diCh.mei_hermana + diCh.mei_hermana

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'gēge',        
        //traduccion
        traduccion: 'hermano mayor',
        //caracter
        caracter: diCh.ge + diCh.ge

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'dìdi',        
        //traduccion
        traduccion: 'hermano menor',
        //caracter
        caracter: diCh.di + diCh.di

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'xiăojiĕ',        
        //traduccion
        traduccion: 'señorita',
        //caracter
        caracter: diCh.xiao + diCh.jie

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'xiānsheng',        
        //traduccion
        traduccion: 'señor',
        //caracter
        caracter: diCh.xian + diCh.sheng

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'wàipó',        
        //traduccion
        traduccion: 'abuela materna',
        //caracter
        caracter: diCh.wai + diCh.po

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'năinai',        
        //traduccion
        traduccion: 'abuela paterna',
        //caracter
        caracter: diCh.nai + diCh.nai

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'wàigōng',        
        //traduccion
        traduccion: 'abuelo materno',
        //caracter
        caracter: diCh.wai + diCh.gong

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'yéye',        
        //traduccion
        traduccion: 'abuelo paterno',
        //caracter
        caracter: diCh.ye_abuelo + diCh.ye_abuelo

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'bàba',        
        //traduccion
        traduccion: 'papá',
        //caracter
        caracter: diCh.ba + diCh.ba

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'māma',        
        //traduccion
        traduccion: 'mamá',
        //caracter
        caracter: diCh.ma + diCh.ma

    },
    //BEBIDAS--------------------------------------------------------------------------
    //NUMEROS--------------------------------------------------------------------------

    
    //--------------------------------------------------------------------------
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'qù',        
        //traduccion
        traduccion: 'ir',
        //caracter
        caracter: diCh.qu

    },

    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'yóuyŏng',        
        //traduccion
        traduccion: 'nadar',
        //caracter
        caracter: diCh.you_nadar + diCh.yong

    },

    
    {   
        categoria: "",
        //pinyin
        pinyin: 'zuótiān',        
        //traduccion
        traduccion: 'ayer',
        //caracter
        caracter: diCh.zuo + diCh.tian

    },

    {   
        categoria: "",
        //pinyin
        pinyin: 'jīngjù',        
        //traduccion
        traduccion: 'Ópera de Pekín',
        //caracter
        caracter: diCh.jing + diCh.ju

    },

    
    {   
        categoria: "",
        //pinyin
        pinyin: 'zĕnmeyàng',        
        //traduccion
        traduccion: '¿qué tal?',
        //caracter
        caracter: diCh.zen + diCh.me + diCh.yang

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'yŏu yìsi',        
        //traduccion
        traduccion: 'interesante',
        //caracter
        caracter: diCh.you_tener + diCh.yi_interesante + diCh.si

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'jīntiān',        
        //traduccion
        traduccion: 'hoy',
        //caracter
        caracter: diCh.jin_hoy + diCh.tian

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'tiān',        
        //traduccion
        traduccion: 'día',
        //caracter
        caracter: diCh.tian

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'tiānqì',        
        //traduccion
        traduccion: 'atmosférico',
        //caracter
        caracter: diCh.tai + diCh.qi_cielo

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'tài',        
        //traduccion
        traduccion: 'demasiado',
        //caracter
        caracter: diCh.tai

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'shíhou',        
        //traduccion
        traduccion: 'tiempo; momento',
        //caracter
        caracter: diCh.shi_tiempo + diCh.hou

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'xiànzài',        
        //traduccion
        traduccion: 'ahora',
        //caracter
        caracter: diCh.xian_ahora + diCh.zai

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'míngtiān',        
        //traduccion
        traduccion: 'mañana',
        //caracter
        caracter: diCh.ming + diCh.tian

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'yŏu',        
        //traduccion
        traduccion: 'tener',
        //caracter
        caracter: diCh.you_tener

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'shíjiān',        
        //traduccion
        traduccion: 'tiempo',
        //caracter
        caracter: diCh.shi_tiempo + diCh.jian_tiempo

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'shuō',        
        //traduccion
        traduccion: 'hablar',
        //caracter
        caracter: diCh.shuo_hablar

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'biàn',        
        //traduccion
        traduccion: 'numero de veces (de una acción)',
        //caracter
        caracter: diCh.bian

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'dă qiú',        
        //traduccion
        traduccion: 'jugar a la pelota',
        //caracter
        caracter: diCh.da_jugar + diCh.qiu

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'dă',        
        //traduccion
        traduccion: 'jugar',
        //caracter
        caracter: diCh.da_jugar

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'qiú',        
        //traduccion
        traduccion: 'pelota',
        //caracter
        caracter: diCh.qiu

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'bàoqiàn',        
        //traduccion
        traduccion: 'lo siento',
        //caracter
        caracter: diCh.bao + diCh.qian

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'kŏngpà',        
        //traduccion
        traduccion: 'quizás, tener que',
        //caracter
        caracter: diCh.kong + diCh.pa

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'xíng',        
        //traduccion
        traduccion: 'estar bien',
        //caracter
        caracter: diCh.xing_estar_bien

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'kāixué',        
        //traduccion
        traduccion: 'empezar el colegio',
        //caracter
        caracter: diCh.kai1 + diCh.xue 

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'kāi',        
        //traduccion
        traduccion: 'empezar',
        //caracter
        caracter: diCh.kai1

    },
    {   
        categoria: "adjetivo",
        //pinyin
        pinyin: 'gāo',        
        //traduccion
        traduccion: 'alto',
        //caracter
        caracter: diCh.gao

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'kàn',        
        //traduccion
        traduccion: 'mirar, ver',
        //caracter
        caracter: diCh.kan4

    },
    {   
        categoria: "etiqueta",
        //pinyin
        pinyin: 'yíxià',        
        //traduccion
        traduccion: 'brevemente',
        //caracter
        caracter: diCh.yi1 + diCh.xia4

    },
    {   
        categoria: "objeto",
        //pinyin
        pinyin: 'mingpìan',        
        //traduccion
        traduccion: 'tarjeta de presentación',
        //caracter
        caracter: diCh.ming2 + diCh.pian4

    },
    {   
        categoria: "etiqueta",
        //pinyin
        pinyin: 'à',        
        //traduccion
        traduccion: 'ah, oh',
        //caracter
        caracter: diCh.a4

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'jiāo',        
        //traduccion
        traduccion: 'enseñar',
        //caracter
        caracter: diCh.jiao

    },
    {   
        categoria: "nombre",
        //pinyin
        pinyin: 'Dīng Lìbō',        
        //traduccion
        traduccion: 'Ding Libo un nombre',
        //caracter
        caracter: diCh.ding1 +diCh.li4 + diCh.bo1

    },
    {   
        categoria: "nombre",
        //pinyin
        pinyin: 'Zhāng',        
        //traduccion
        traduccion: 'Zhang un apellido',
        //caracter
        caracter: diCh.zhang1

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'jièshào',        
        //traduccion
        traduccion: 'presentar',
        //caracter
        caracter: diCh.jie4 + diCh.shao4

    },
    {   
        categoria: "etiqueta",
        //pinyin
        pinyin: 'míngzi',        
        //traduccion
        traduccion: 'nombre',
        //caracter
        caracter: diCh.ming2 + diCh.zi4

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'zhuānyè',        
        //traduccion
        traduccion: 'carrera, especialidad',
        //caracter
        caracter: diCh.zhuan1 + diCh.ye4

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'měishù',        
        //traduccion
        traduccion: 'bellas artes',
        //caracter
        caracter: diCh.mei + diCh.shu4

    },
    {   
        categoria: "adjetivo",
        //pinyin
        pinyin: 'měi',        
        //traduccion
        traduccion: 'bello',
        //caracter
        caracter: diCh.mei

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'wénxué',        
        //traduccion
        traduccion: 'literatura',
        //caracter
        caracter: diCh.wen + diCh.xue

    },
    {   
        categoria: "lugares",
        //pinyin
        pinyin: 'xì',        
        //traduccion
        traduccion: 'facultad',
        //caracter
        caracter: diCh.xi

    },
    {   
        categoria: "nombre",
        //pinyin
        pinyin: 'Mǎ Dàwéi',        
        //traduccion
        traduccion: 'nombre',
        //caracter
        caracter: diCh.ma3 + diCh.da + diCh.wei2

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'wénhuà',
        //traduccion
        traduccion: 'cultura',
        //caracter
        caracter: diCh.wen + diCh.hua4

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'lìshǐ',        
        //traduccion
        traduccion: 'historia',
        //caracter
        caracter: diCh.li4 + diCh.shi3

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'zhéxué',        
        //traduccion
        traduccion: 'filosofía',
        //caracter
        caracter: diCh.zhe4 + diCh.xue

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'yīnyuè',        
        //traduccion
        traduccion: 'música',
        //caracter
        caracter: diCh.yin1 + diCh.yue4

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'jīngjì',        
        //traduccion
        traduccion: 'economía',
        //caracter
        caracter: diCh.jing1 + diCh.ji4

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'shùxué',        
        //traduccion
        traduccion: 'matemáticas',
        //caracter
        caracter: diCh.shu4 + diCh.xue

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'wùlǐ',        
        //traduccion
        traduccion: 'física',
        //caracter
        caracter: diCh.wu4 + diCh.li3

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'huàxué',        
        //traduccion
        traduccion: 'química',
        //caracter
        caracter: diCh.hua4 + diCh.xue

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'jiàoyù',        
        //traduccion
        traduccion: 'educación',
        //caracter
        caracter: diCh.jiao + diCh.yu4

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'xuǎnxiū',        
        //traduccion
        traduccion: 'escoger una asignatura optativa',
        //caracter
        caracter: diCh.xuan3 + diCh.xiu1

    },
    {   
        categoria: "sustantivo",
        //pinyin
        pinyin: 'jiā',        
        //traduccion
        traduccion: 'hogar,familia',
        //caracter
        caracter: diCh.jia1

    },
    {   
        categoria: "adverbio int",
        //pinyin
        pinyin: 'jǐ',        
        //traduccion
        traduccion: 'cuántos',
        //caracter
        caracter: diCh.ji3

    },
    {   
        categoria: "clasificador",
        //pinyin
        pinyin: 'kǒu',        
        //traduccion
        traduccion: 'clasificador para miembros de la familia',
        //caracter
        caracter: diCh.kou3

    },
    {   
        categoria: "objeto",
        //pinyin
        pinyin: 'zhàopiàn',        
        //traduccion
        traduccion: 'fotografía',
        //caracter
        caracter: diCh.zhao4 + diCh.pian4

    },
    {   
        categoria: "conjunción",
        //pinyin
        pinyin: 'hé',        
        //traduccion
        traduccion: 'y',
        //caracter
        caracter: diCh.he2

    },
    {   
        categoria: "clasificador",
        //pinyin
        pinyin: 'gè',        
        //traduccion
        traduccion: 'clasificador de uso general (gè)',
        //caracter
        caracter: diCh.ge4

    },
    {   
        categoria: "numero",
        //pinyin
        pinyin: 'liǎng',        
        //traduccion
        traduccion: 'dos',
        //caracter
        caracter: diCh.liang

    },
    {   
        categoria: "adverbio",
        //pinyin
        pinyin: 'hái',        
        //traduccion
        traduccion: 'además',
        //caracter
        caracter: diCh.hai2_ademas

    },
    {   
        categoria: "adverbio",
        //pinyin
        pinyin: 'yígòng',        
        //traduccion
        traduccion: 'en total',
        //caracter
        caracter: diCh.yi1 + diCh.gong4

    },
    {   
        categoria: "animales",
        //pinyin
        pinyin: 'gǒu',
        //traduccion
        traduccion: 'perro',
        //caracter
        caracter: diCh.gou3

    },
    {   
        categoria: "clasificador",
        //pinyin
        pinyin: 'zhāng',        
        //traduccion
        traduccion: 'clasificador de objetos planos',
        //caracter
        caracter: diCh.zhang1

    },
    {   
        categoria: "adjetivo",
        //pinyin
        pinyin: 'dāngrán',        
        //traduccion
        traduccion: 'por supuesto',
        //caracter
        caracter: diCh.dang1 + diCh.ran2

    },
    {   
        categoria: "adjetivo",
        //pinyin
        pinyin: 'zhēn',        
        //traduccion
        traduccion: 'realmente',
        //caracter
        caracter: diCh.zhen1

    },
    {   
        categoria: "adjetivo",
        //pinyin
        pinyin: 'kě\'ài',        
        //traduccion
        traduccion: 'adorable',
        //caracter
        caracter: diCh.ke + diCh.ai4

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'ài',        
        //traduccion
        traduccion: 'amar',
        //caracter
        caracter: diCh.ai4

    },
    {   
        categoria: "adverbio",
        //pinyin
        pinyin: 'méi',        
        //traduccion
        traduccion: 'no',
        //caracter
        caracter: diCh.mei_no

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'zuò',        
        //traduccion
        traduccion: 'hacer',
        //caracter
        caracter: diCh.zuo4

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'gōngzuò',        
        //traduccion
        traduccion: 'trabajo, trabajar',
        //caracter
        caracter: diCh.gong1 + diCh.zuo4

    },
    {   
        categoria: "nombre",
        //pinyin
        pinyin: 'Wáng Xiǎoyún',        
        //traduccion
        traduccion: 'nombre',
        //caracter
        caracter: diCh.wang2 + diCh.xiao + diCh.yun2

    },
    {   
        categoria: "nombre",
        //pinyin
        pinyin: 'Bèibei',        
        //traduccion
        traduccion: 'nombre de un perro',
        //caracter
        caracter: diCh.bei4 + diCh.bei4

    },
    {   
        categoria: "adverbio int",
        //pinyin
        pinyin: 'duōshao',        
        //traduccion
        traduccion: 'cuántos',
        //caracter
        caracter: diCh.duo1 + diCh.shao3

    },
    {   
        categoria: "adjetivo",
        //pinyin
        pinyin: 'duō',        
        //traduccion
        traduccion: 'mucho',
        //caracter
        caracter: diCh.duo1

    },
    {   
        categoria: "adjetivo",
        //pinyin
        pinyin: 'shǎo',        
        //traduccion
        traduccion: 'poco',
        //caracter
        caracter: diCh.shao3

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'xǐhuan',        
        //traduccion
        traduccion: 'gustar, preferir',
        //caracter
        caracter: diCh.xi3 + diCh.huan1

    },
    {   
        categoria: "país",
        //pinyin
        pinyin: 'wàiguó',        
        //traduccion
        traduccion: 'país extranjero',
        //caracter
        caracter: diCh.wai + diCh.gou3

    },
    {   
        categoria: "número",
        //pinyin
        pinyin: 'bǎi',        
        //traduccion
        traduccion: 'cien',
        //caracter
        caracter: diCh.bai3

    },
    {   
        categoria: "objeto",
        //pinyin
        pinyin: 'chē',        
        //traduccion
        traduccion: 'coche, auto',
        //caracter
        caracter: diCh.che1

    },
    {   
        categoria: "objeto",
        //pinyin
        pinyin: 'cídiǎn',        
        //traduccion
        traduccion: 'diccionario',
        //caracter
        caracter: diCh.ci2 + diCh.dian3

    },
    {   
        categoria: "objeto",
        //pinyin
        pinyin: 'diànnǎo',        
        //traduccion
        traduccion: 'computadora, ordenador',
        //caracter
        caracter: diCh.dian4 + diCh.nao3

    },
    {   
        categoria: "sustantivo",
        //pinyin
        pinyin: 'háizi',        
        //traduccion
        traduccion: 'niño',
        //caracter
        caracter: diCh.hai2 + diCh.zi3

    },
    {   
        categoria: "profesión",
        //pinyin
        pinyin: 'xìzhǔrèn',        
        //traduccion
        traduccion: 'jefe de departamento',
        //caracter
        caracter: diCh.xi + diCh.zhu3 + diCh.ren2

    },
    {   
        categoria: "profesión",
        //pinyin
        pinyin: 'zhùjiào',        
        //traduccion
        traduccion: 'ayudante de profesor',
        //caracter
        caracter: diCh.zhu2 + diCh.jiao

    },
    {   
        categoria: "profesión",
        //pinyin
        pinyin: 'lǜshī',        
        //traduccion
        traduccion: 'abogado',
        //caracter
        caracter: diCh.lu2 + diCh.shi_maestro

    },
    {   
        categoria: "profesión",
        //pinyin
        pinyin: 'gōngchéngshī',        
        //traduccion
        traduccion: 'ingeniero',
        //caracter
        caracter: diCh.gong1 + diCh.cheng3 + diCh.shi_maestro

    }

];

let bufferCaracteres = [];
let bufferPinyin = [];
let bufferTraduccion = [];
for (const e of caracteresPinyinTraduccion) {
    caracter = e.caracter
    pinyin = e.pinyin;
    traduccion = e.traduccion;
    
    bufferCaracteres.push(caracter);
    bufferPinyin.push(pinyin);
    bufferTraduccion.push(traduccion);
}

function generarEnteroAleatorio(cantidadImagenes) {
    return Math.floor(Math.random() * cantidadImagenes);
}  


let buton1 = '<button id="boton" onclick="cargarImagenAleatoria();" >caracter aleatorio</button>';
let buton2 = '<button id="boton" onclick="mostrarRespuesta();" >respuesta</button>';

const chHanzi = document.getElementById("chHanzi");
const chPinyin = document.getElementById("chPinyin");
const chEspanol = document.getElementById("chEspanol");

let estadoChHanzi;
let estadoChPinyin;
let estadoChTraduccion;

function setCheckpoints(){
    if(chHanzi.checked){
        estadoChHanzi = true;
    }else if(chHanzi.checked=false){
        estadoChHanzi = true;
    }if(chPinyin.checked){
        estadoChPinyin = true;
    }else if(chPinyin.checked=false){
        estadoChPinyin = true;
    }if(chEspanol.checked){
        estadoChTraduccion = true;
    }else if(chEspanol.checked=false){
        estadoChTraduccion = true;
    }
    document.getElementById("checkboxes").style.display = "none";
    document.getElementById("botondiv").innerHTML=buton1;

}


function cargarImagenAleatoria(){
    ocultarRespuesta();
    let indiceAleatorio = generarEnteroAleatorio(caracteresPinyinTraduccion.length);
    let caracterAleatorio = bufferCaracteres[indiceAleatorio];
    let pinyinAleatorio = bufferPinyin[indiceAleatorio];
    let traduccionAleatoria = bufferTraduccion[indiceAleatorio];
    
    document.getElementById("hanzi").innerHTML=caracterAleatorio;
    document.getElementById("PinYin").innerHTML=pinyinAleatorio;
    document.getElementById("traduccion").innerHTML=traduccionAleatoria;
    document.getElementById("botondiv").innerHTML=buton2;
}

// funcion para mostrar respuesta la segunda vez que se clickea el boton

function mostrarRespuesta(){
    
    if (chHanzi.checked == false){
        chHanzi.checked = true;
    }
    if (chPinyin.checked == false){
        chPinyin.checked = true

    }
    if (chEspanol.checked == false){
        chEspanol.checked = true

    }
    mostrar('hanzi','chHanzi');
    mostrar('pinyin','chPinyin');
    mostrar('espanol','chEspanol');
    document.getElementById("botondiv").innerHTML=buton1;
}
function ocultarRespuesta(){
    chHanzi.checked = estadoChHanzi;
    chPinyin.checked = estadoChPinyin;
    chEspanol.checked = estadoChTraduccion;
    mostrar('hanzi','chHanzi');
    mostrar('pinyin','chPinyin');
    mostrar('espanol','chEspanol');
}

let listas = document.getElementById("listas");
let categorias = ["pron dem", "estudio", "profesiones", "paises", "lugares", "adjetivos", "adverbio", "adverbio inter", "idiomas", "verbos", "etiqueta" ,"personas"];
var numCaracter = 0; 
for (const a of categorias) {
    let bufferListas = []; 
    listas.innerHTML=listas.innerHTML + "<h2>"+ a + "</h2>" + "<br>";
    for(const b of caracteresPinyinTraduccion){
        if (b.categoria==a){
            listas.innerHTML=listas.innerHTML + "<h2>"+ '<div id="' + numCaracter + '">' + b.caracter + '</div>'  + "___________"+ b.pinyin + "___________" + b.traduccion + "</h2>" + "<br>";
            numCaracter++;
        }
    }
}

function redibujarCaracter(string,id){
    document.getElementById(id).innerHTML=string;
}

