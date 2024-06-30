 

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
    xi: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20064.svg" title="习 ( xi / xí ) orden de los trazos" width="150" height="150"></object>',
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
    han: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/27721.svg" title="汉 ( han / hàn ) orden de los trazos"width="150" height="150"></object>'
    
    



}
let caracteresPinyinTraduccion = [
    {   
        //pinyin
        pinyin: 'zhè',        
        //traduccion
        traduccion: 'este, eso',
        //caracter
        caracter: diCh.zhe

    },
    {   
        //pinyin
        pinyin: 'nà',        
        //traduccion
        traduccion: 'aquel',
        //caracter
        caracter: diCh.na

    },
    {   
        //pinyin
        pinyin: 'zhèr',        
        //traduccion
        traduccion: 'aquí',
        //caracter
        caracter: diCh.zhe + diCh.er

    },
    {   
        //pinyin
        pinyin: 'nàr',        
        //traduccion
        traduccion: 'hay',
        //caracter
        caracter: diCh.na + diCh.er

    },
    {   
        //pinyin
        pinyin: 'xuésheng',        
        //traduccion
        traduccion: 'estudiante',
        //caracter
        caracter: diCh.xue + diCh.sheng

    },
    {   
        //pinyin
        pinyin: 'yīshēng',        
        //traduccion
        traduccion: 'médico',
        //caracter
        caracter: diCh.yi + diCh.sheng

    },
    {   
        //pinyin
        pinyin: 'lăoshī',        
        //traduccion
        traduccion: 'profesor',
        //caracter
        caracter: diCh.lao + diCh.shi_maestro

    },
    {   
        //pinyin
        pinyin: 'jiàoshòu',        
        //traduccion
        traduccion: 'profesor',
        //caracter
        caracter: diCh.jiao + diCh.shou

    },
    {   
        //pinyin
        pinyin: 'jìzhĕ',        
        //traduccion
        traduccion: 'periodista',
        //caracter
        caracter: diCh.ji + diCh.zhe_elque

    },
    {   
        //pinyin
        pinyin: 'Zhōngguó',        
        //traduccion
        traduccion: 'China',
        //caracter
        caracter: diCh.zhong +diCh.guo

    },
    {   
        //pinyin
        pinyin: 'Mĕiguó',        
        //traduccion
        traduccion: 'USA',
        //caracter
        caracter: diCh.mei + diCh.guo

    },
    {   
        //pinyin
        pinyin: 'Yīngguó',        
        //traduccion
        traduccion: 'Gran Bretaña',
        //caracter
        caracter: diCh.ying +diCh.guo

    },
    {   
        //pinyin
        pinyin: 'Jiānádà',        
        //traduccion
        traduccion: 'Canadá',
        //caracter
        caracter: diCh.jia + diCh.na_canada +diCh.da

    },
    {   
        //pinyin
        pinyin: 'Rìbĕn',        
        //traduccion
        traduccion: 'Japón',
        //caracter
        caracter: diCh.ri + diCh.ben

    },
    {   
        //pinyin
        pinyin: 'éguó',        
        //traduccion
        traduccion: 'Rusia',
        //caracter
        caracter: diCh.e +diCh.guo

    },
    {   
        //pinyin
        pinyin: 'Făguó',        
        //traduccion
        traduccion: 'Francia',
        //caracter
        caracter: diCh.fa +diCh.guo

    },
    {   
        //pinyin
        pinyin: 'cāntīng',        
        //traduccion
        traduccion: 'comedor',
        //caracter
        caracter: diCh.can +diCh.ting

    },
    {   
        //pinyin
        pinyin: 'xuéyuàn',        
        //traduccion
        traduccion: 'institución educativa',
        //caracter
        caracter: diCh.xue + diCh.yuan 

    },
    {   
        //pinyin
        pinyin: 'sushè',        
        //traduccion
        traduccion: 'dormitorio',
        //caracter
        caracter: diCh.su + diCh.she

    },
    {   
        //pinyin
        pinyin: 'cèsuŏ',        
        //traduccion
        traduccion: 'baño',
        //caracter
        caracter: diCh.ce + diCh.suo

    },
    {   
        //pinyin
        pinyin: 'céng',        
        //traduccion
        traduccion: 'piso',
        //caracter
        caracter: diCh.ceng

    },
    {   
        //pinyin
        pinyin: 'zài',        
        //traduccion
        traduccion: 'estar',
        //caracter
        caracter: diCh.zai

    },
    {   
        //pinyin
        pinyin: 'dōu',        
        //traduccion
        traduccion: 'todo/todos/ambos',
        //caracter
        caracter: diCh.dou

    },
    {   
        //pinyin
        pinyin: 'hĕn',        
        //traduccion
        traduccion: 'mucho',
        //caracter
        caracter: diCh.hen

    },
    {   
        //pinyin
        pinyin: 'yĕ',        
        //traduccion
        traduccion: 'también',
        //caracter
        caracter: diCh.ye

    },
    {   
        //pinyin
        pinyin: 'năr',        
        //traduccion
        traduccion: 'dónde',
        //caracter
        caracter: diCh.na_cual + diCh.er

    },
    {   
        //pinyin
        pinyin: 'nă',        
        //traduccion
        traduccion: 'cuál',
        //caracter
        caracter: diCh.na_cual

    },
    {   
        //pinyin
        pinyin: 'shénme',        
        //traduccion
        traduccion: 'qué',
        //caracter
        caracter: diCh.shen + diCh.me

    },
    {   
        //pinyin
        pinyin: 'shéi',        
        //traduccion
        traduccion: 'quién',
        //caracter
        caracter: diCh.shei

    },
    {   
        //pinyin
        pinyin: 'Zhōngwén',        
        //traduccion
        traduccion: 'idioma chino',
        //caracter
        caracter: diCh.zhong + diCh.wen

    },
    {   
        //pinyin
        pinyin: 'Hànyŭ',        
        //traduccion
        traduccion: 'idioma chino (idioma de los han)',
        //caracter
        caracter: diCh.han + diCh.yu

    },
    {   
        //pinyin
        pinyin: 'Yīngwén',        
        //traduccion
        traduccion: 'idioma inglés',
        //caracter
        caracter: diCh.ying + diCh.wen

    },
    {   
        //pinyin
        pinyin: 'Yīngyŭ',        
        //traduccion
        traduccion: 'idioma inglés',
        //caracter
        caracter: diCh.ying + diCh.yu

    },
    {   
        //pinyin
        pinyin: 'Rìbĕn',        
        //traduccion
        traduccion: 'idioma japonés',
        //caracter
        caracter: diCh.ri + diCh.ben

    },
    {   
        //pinyin
        pinyin: 'Rìyŭ',
        //traduccion
        traduccion: 'idioma japonés',
        //caracter
        caracter: diCh.ri + diCh.yu

    },
    {   
        //pinyin
        pinyin: 'èwén',        
        //traduccion
        traduccion: 'idioma ruso',
        //caracter
        caracter: diCh.e + diCh.wen

    },
    {   
        //pinyin
        pinyin: 'èyŭ',        
        //traduccion
        traduccion: 'idioma ruso',
        //caracter
        caracter: diCh.e + diCh.yu

    },
    {   
        //pinyin
        pinyin: 'Făyŭ',        
        //traduccion
        traduccion: 'idioma francés',
        //caracter
        caracter: diCh.fa + diCh.yu

    },
    {   
        //pinyin
        pinyin: 'Făwén',        
        //traduccion
        traduccion: 'idioma francés',
        //caracter
        caracter: diCh.fa + diCh.wen

    },
    {   
        //pinyin
        pinyin: 'qĭngwèn',        
        //traduccion
        traduccion: 'por favor una pregunta',
        //caracter
        caracter: diCh.qing + diCh.wen

    },
    {   
        //pinyin
        pinyin: 'shì',        
        //traduccion
        traduccion: 'ser',
        //caracter
        caracter: diCh.shi

    },
    {   
        //pinyin
        pinyin: 'wèn',        
        //traduccion
        traduccion: 'preguntar',
        //caracter
        caracter: diCh.wen_preguntar

    },
    {   
        //pinyin
        pinyin: 'kĕyĭ',        
        //traduccion
        traduccion: 'poder',
        //caracter
        caracter: diCh.ke + diCh.yi_uso

    },
    {   
        //pinyin
        pinyin: 'zài',        
        //traduccion
        traduccion: 'estar',
        //caracter
        caracter: diCh.zai

    },
    {   
        //pinyin
        pinyin: 'jiào',        
        //traduccion
        traduccion: 'llamarse/nombre',
        //caracter
        caracter: diCh.jiao

    },
    {   
        //pinyin
        pinyin: 'xìng',        
        //traduccion
        traduccion: 'apellidarse/apellido',
        //caracter
        caracter: diCh.xing

    },
    {   
        //pinyin
        pinyin: 'zhīdao',        
        //traduccion
        traduccion: 'saber',
        //caracter
        caracter: diCh.zhi + diCh.dao

    },
    {   
        //pinyin
        pinyin: 'rènshi',        
        //traduccion
        traduccion: 'conocer',
        //caracter
        caracter: diCh.ren + diCh.shi_reconocer

    },
    {   
        //pinyin
        pinyin: 'jìn',        
        //traduccion
        traduccion: 'entrar',
        //caracter
        caracter: diCh.jin

    },
    {   
        //pinyin
        pinyin: 'lái',        
        //traduccion
        traduccion: 'venir',
        //caracter
        caracter: diCh.lai

    },
    {   
        //pinyin
        pinyin: 'jìnlái',        
        //traduccion
        traduccion: 'entrar',
        //caracter
        caracter: diCh.jin + diCh.lai

    },
    {   
        //pinyin
        pinyin: 'xuéxí',        
        //traduccion
        traduccion: 'estudiar',
        //caracter
        caracter: diCh.xue + diCh.xi

    },
    {   
        //pinyin
        pinyin: 'gāoxìng',        
        //traduccion
        traduccion: 'encantado',
        //caracter
        caracter: diCh.gao + diCh.xing_feliz

    },
    {   
        //pinyin
        pinyin: 'dà',        
        //traduccion
        traduccion: 'grande',
        //caracter
        caracter: diCh.da

    },
    {   
        //pinyin
        pinyin: 'xiăo',        
        //traduccion
        traduccion: 'pequeño',
        //caracter
        caracter: diCh.xiao

    },
    {   
        //pinyin
        pinyin: 'hăo',        
        //traduccion
        traduccion: 'muy',
        //caracter
        caracter: diCh.hao

    },
    {   
        //pinyin
        pinyin: 'wán',        
        //traduccion
        traduccion: 'tarde',
        //caracter
        caracter: diCh.wan

    },
    {   
        //pinyin
        pinyin: 'qĭngwèn',        
        //traduccion
        traduccion: 'preguntar',
        //caracter
        caracter: diCh.qing + diCh.wen

    },
    {   
        //pinyin
        pinyin: 'xièxie',        
        //traduccion
        traduccion: 'gracias',
        //caracter
        caracter:  diCh.xie + diCh.xie

    },
    {   
        //pinyin
        pinyin: 'duì bùqĭ',        
        //traduccion
        traduccion: 'perdón/ lo siento',
        //caracter
        caracter: diCh.dui + diCh.bu + diCh.qi

    },
    {   
        //pinyin
        pinyin: 'méi guānxi',        
        //traduccion
        traduccion: 'no pasa nada',
        //caracter
        caracter: diCh.mei + diCh.guan  + diCh.xi

    },
    {   
        //pinyin
        pinyin: 'nín guì xìng',        
        //traduccion
        traduccion: 'su nombre?',
        //caracter
        caracter:  diCh.nin + diCh.gui + diCh.xing

    },
    {   
        //pinyin
        pinyin: 'zàijiàn ',        
        //traduccion
        traduccion: 'adiós',
        //caracter
        caracter: diCh.zai_otravez + diCh.jian

    },
    {   
        //pinyin
        pinyin: 'hē',        
        //traduccion
        traduccion: 'beber',
        //caracter
        caracter: diCh.he

    },
    {   
        //pinyin
        pinyin: 'nán',        
        //traduccion
        traduccion: 'hombre',
        //caracter
        caracter: diCh.nan

    },
    {   
        //pinyin
        pinyin: 'nǚ',        
        //traduccion
        traduccion: 'mujer',
        //caracter
        caracter: diCh.nu

    },
    {   
        //pinyin
        pinyin: 'nánshì',        
        //traduccion
        traduccion: 'hombre',
        //caracter
        caracter: diCh.nan + diCh.shi_erudito

    },
    {   
        //pinyin
        pinyin: 'nǚshì',        
        //traduccion
        traduccion: 'mujer',
        //caracter
        caracter: diCh.nu + diCh.shi_erudito

    },
    {   
        //pinyin
        pinyin: 'tàitai',        
        //traduccion
        traduccion: 'señora',
        //caracter
        caracter: diCh.tai + diCh.tai

    },
    {   
        //pinyin
        pinyin: 'nánpéngyŏu',        
        //traduccion
        traduccion: 'novio',
        //caracter
        caracter: diCh.nan + diCh.peng + diCh.you

    },
    {   
        //pinyin
        pinyin: 'nǚpéngyŏu',        
        //traduccion
        traduccion: 'novia',
        //caracter
        caracter: diCh.nu + diCh.peng + diCh.you

    },
    {   
        //pinyin
        pinyin: 'jiĕjie',        
        //traduccion
        traduccion: 'hermana mayor',
        //caracter
        caracter: diCh.jie + diCh.jie

    },
    {   
        //pinyin
        pinyin: 'mèimei',        
        //traduccion
        traduccion: 'hermana menor',
        //caracter
        caracter: diCh.mei_hermana + diCh.mei_hermana

    },
    {   
        //pinyin
        pinyin: 'gēge',        
        //traduccion
        traduccion: 'hermano mayor',
        //caracter
        caracter: diCh.ge + diCh.ge

    },
    {   
        //pinyin
        pinyin: 'dìdi',        
        //traduccion
        traduccion: 'hermano menor',
        //caracter
        caracter: diCh.di + diCh.di

    },
    {   
        //pinyin
        pinyin: 'xiăojiĕ',        
        //traduccion
        traduccion: 'señorita',
        //caracter
        caracter: diCh.xiao + diCh.jie

    },
    {   
        //pinyin
        pinyin: 'xiānsheng',        
        //traduccion
        traduccion: 'señor',
        //caracter
        caracter: diCh.xian + diCh.sheng

    },
    {   
        //pinyin
        pinyin: 'wàipó',        
        //traduccion
        traduccion: 'abuela materna',
        //caracter
        caracter: diCh.wai + diCh.po

    },
    {   
        //pinyin
        pinyin: 'năinai',        
        //traduccion
        traduccion: 'abuela paterna',
        //caracter
        caracter: diCh.nai + diCh.nai

    },
    {   
        //pinyin
        pinyin: 'wàigōng',        
        //traduccion
        traduccion: 'abuelo materno',
        //caracter
        caracter: diCh.wai + diCh.gong

    },
    {   
        //pinyin
        pinyin: 'yéye',        
        //traduccion
        traduccion: 'abuelo paterno',
        //caracter
        caracter: diCh.ye + diCh.ye

    },
    {   
        //pinyin
        pinyin: 'bàba',        
        //traduccion
        traduccion: 'papá',
        //caracter
        caracter: diCh.ba + diCh.ba

    },
    {   
        //pinyin
        pinyin: 'māma',        
        //traduccion
        traduccion: 'mamá',
        //caracter
        caracter: diCh.ma + diCh.ma

    }
    //agregar numeros...
    
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


let buton1 = '<button  onclick="cargarImagenAleatoria();" >caracter aleatorio</button>';
let buton2 = '<button  onclick="mostrarRespuesta();" >respuesta</button>';

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
    document.getElementById("boton").innerHTML=buton1;

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
    document.getElementById("boton").innerHTML=buton2;
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
    document.getElementById("boton").innerHTML=buton1;
}
function ocultarRespuesta(){
    chHanzi.checked = estadoChHanzi;
    chPinyin.checked = estadoChPinyin;
    chEspanol.checked = estadoChTraduccion;
    mostrar('hanzi','chHanzi');
    mostrar('pinyin','chPinyin');
    mostrar('espanol','chEspanol');
}

    