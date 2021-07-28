import $ from "jquery"
console.log("community.js正在运行")
////小区投放点位信息
//社区对象

var _villages = [];
var _communities = [];
//--神童泾社区
//珠海新村
var points = [];
var borderPointsString = "121.05172, 31.320338; 121.051833, 31.320477; 121.051914, 31.320666; 121.051949, 31.320885; 121.051963, 31.321171; 121.051788, 31.321772; 121.051676, 31.321992; 121.051579, 31.3222; 121.051509, 31.322336; 121.051446, 31.322466; 121.051384, 31.322585; 121.050966, 31.323432; 121.050738, 31.323909; 121.04976, 31.32357; 121.049419, 31.323683; 121.048231, 31.323153; 121.048931, 31.321934; 121.049214, 31.322058; 121.049282, 31.322015; 121.049394, 31.322004; 121.0496, 31.321715; 121.049187, 31.321445; 121.049232, 31.321356; 121.050364, 31.319466; 121.051482, 31.320095; 121.05172, 31.320338";
var community = new obj_community("珠海新村", '408', borderPointsString, points);
_communities.push(community);

//徐里村--找不到小区边界

//园丁新村
points = [];
borderPointsString = "121.043134,31.320084;121.043305,31.319567;121.045272,31.32013;121.045137,31.32062;121.044324,31.320343;121.043597,31.320219;121.043134,31.320084";
community = new obj_community("园丁新村", '166', borderPointsString, points);
_communities.push(community);
//陆电新村
points = [];
borderPointsString = "121.047754, 31.323409; 121.04629, 31.323027; 121.045773, 31.324249; 121.045276, 31.325614; 121.045818, 31.325811; 121.046531, 31.324011; 121.047352, 31.324249; 121.047754, 31.323409";
community = new obj_community("陆电新村", '278', borderPointsString, points);
_communities.push(community);
//神童花苑
points = [];
borderPointsString = "121.045152, 31.325854; 121.045756, 31.326031; 121.045594, 31.326405; 121.046035, 31.326555; 121.046079, 31.326598; 121.045655, 31.327416; 121.04465, 31.327086; 121.045152, 31.325854";
community = new obj_community("神童花苑", '140', borderPointsString, points);
_communities.push(community);
//南粮花园
points = [];
borderPointsString = "121.048492, 31.320853; 121.048577, 31.320722; 121.048712, 31.320572; 121.0489, 31.320514; 121.049006, 31.320382; 121.048822, 31.32029; 121.0474, 31.319781; 121.047241, 31.320205; 121.047187, 31.320463; 121.048492, 31.320853";
community = new obj_community("南粮花园", '158', borderPointsString, points);
_communities.push(community);
//好孩子公寓
points = [];
borderPointsString = "121.046561,31.320447;121.045651,31.320197;121.045394,31.320925;121.04516,31.321707;121.045362,31.321764;121.046147,31.321542;121.046455,31.320701;121.046561,31.320447";
community = new obj_community("好孩子公寓", '236', borderPointsString, points);
_communities.push(community);
//云立方
points = [];
borderPointsString = "121.039978, 31.330915; 121.039704, 31.330715; 121.040766, 31.327493; 121.044321, 31.328687; 121.044313, 31.328842; 121.044141, 31.328994; 121.042067, 31.329878; 121.039978, 31.330915";
community = new obj_community("云立方", '1176', borderPointsString, points);
_communities.push(community);
//东方假日城
points = [];
borderPointsString = "121.045128, 31.3256; 121.045946, 31.323522; 121.045995, 31.323148; 121.045923, 31.323013; 121.045416, 31.322855; 121.04291, 31.322149; 121.042571, 31.322446; 121.042204, 31.322457; 121.041706, 31.32464; 121.045128, 31.3256";
community = new obj_community("东方假日城", '930', borderPointsString, points);
_communities.push(community);
//富荣花园
points = [];
borderPointsString = "121.044744, 31.32054; 121.045403, 31.320801; 121.045153, 31.321719; 121.045364, 31.32177; 121.046177, 31.321574; 121.047007, 31.321786; 121.046114, 31.322831; 121.044474, 31.322352; 121.042341, 31.321755; 121.042794, 31.320035; 121.044744, 31.32054";
community = new obj_community("富荣花园", '651', borderPointsString, points);
_communities.push(community);


_villages.push(new obj_village("神童泾", _communities));
_communities = [];

//--邹家角
//水岸香堤
points = [];
borderPointsString = "121.053638, 31.323352; 121.053223, 31.32448; 121.054526, 31.324948; 121.055814, 31.323906; 121.05572, 31.323643; 121.054925, 31.323616; 121.053638, 31.323352";
community = new obj_community("水岸香堤", '744', borderPointsString, points);
_communities.push(community);
//启发广场
points = [];
borderPointsString = "121.050605, 31.326676; 121.050919, 31.326996; 121.051373, 31.326946; 121.05275, 31.326325; 121.054367, 31.324993; 121.054344, 31.324895; 121.053199, 31.324482; 121.053194, 31.32442; 121.053455, 31.323815; 121.053594, 31.323387; 121.053006, 31.323102; 121.052171, 31.322594; 121.051863, 31.323025; 121.051645, 31.323632; 121.051254, 31.324784; 121.050605, 31.326676";
community = new obj_community("启发广场", '879', borderPointsString, points);
_communities.push(community);
//名湖花苑
points = [];
borderPointsString = "121.059207, 31.31984; 121.060127, 31.318494; 121.060963, 31.318906; 121.060767, 31.319782; 121.060556, 31.320441; 121.0605, 31.320469; 121.06044, 31.32046; 121.060368, 31.320425; 121.059207, 31.31984";
community = new obj_community("名湖花苑", '317', borderPointsString, points);
_communities.push(community);
//名湖家园(别墅)
points = [];
borderPointsString = "121.060608, 31.320482; 121.06195, 31.321157; 121.062121, 31.320869; 121.062017, 31.320553; 121.062029, 31.32033; 121.062411, 31.319683; 121.060996, 31.318973; 121.060608, 31.320482";
community = new obj_community("名湖别墅", '56', borderPointsString, points);
_communities.push(community);
//联谊新村
points = [];
borderPointsString = "121.059043, 31.319617; 121.059915, 31.318444; 121.05894, 31.317985; 121.058248, 31.317777; 121.058078, 31.317943; 121.057723, 31.317746; 121.057139, 31.318413; 121.057646, 31.318614; 121.05753, 31.318845; 121.059043, 31.319617";
community = new obj_community("联谊新村", '439', borderPointsString, points);
_communities.push(community);
//桃园春天
points = [];
borderPointsString = "121.062334, 31.316728; 121.062424, 31.318606; 121.060655, 31.317669; 121.061535, 31.316348; 121.062334, 31.316728";
community = new obj_community("桃园春天", '206', borderPointsString, points);
_communities.push(community);
//木瓜东区北
points = [];
borderPointsString = "121.059893, 31.314376; 121.060549, 31.314602; 121.060962, 31.31366; 121.059194, 31.312982; 121.058911, 31.313649; 121.06001, 31.314077; 121.059893, 31.314376";
community = new obj_community("木瓜东区北", '250', borderPointsString, points);
_communities.push(community);
//木瓜东区中
points = [];
borderPointsString = "121.061304,31.311844;121.060635,31.313112;121.058995,31.312511;121.059624,31.311173;121.060127,31.311373;121.061304,31.311844";
community = new obj_community("木瓜东区中", '250', borderPointsString, points);
_communities.push(community);
//木瓜东区南
points = [];
borderPointsString = "121.060845,31.309518;121.060784,31.309614;121.060486,31.310276;121.060186,31.310901;121.060172,31.310983;121.060228,31.311035;121.062132,31.311754;121.062243,31.311774;121.0623,31.311742;121.062861,31.310378;121.062884,31.310298;121.062852,31.310199;121.060937,31.309494;121.060845,31.309518";
community = new obj_community("木瓜东区南", '250', borderPointsString, points);
_communities.push(community);
//木瓜西区北
points = [];
borderPointsString = "121.056517,31.310092;121.056302,31.310507;121.057611,31.311034;121.057518,31.311224;121.058136,31.311483;121.058461,31.310805;121.056517,31.310092";
community = new obj_community("木瓜西区北", '300', borderPointsString, points);
_communities.push(community);
//木瓜西区南
points = [];
borderPointsString = "121.058574, 31.310446; 121.059378, 31.308983; 121.057432, 31.308281; 121.056714, 31.309745; 121.05793, 31.310207; 121.058574, 31.310446";
community = new obj_community("木瓜西区南", '300', borderPointsString, points);
_communities.push(community);

_villages.push(new obj_village("邹家角", _communities));
_communities = [];

//--邵村
//蒋巷南苑
points = [];
borderPointsString = "121.030387, 31.312027; 121.030871, 31.309552; 121.033661, 31.309544; 121.033612, 31.309339; 121.034218, 31.309328; 121.034656, 31.311873; 121.033602, 31.311924; 121.03248, 31.311977; 121.031663, 31.31202; 121.030553, 31.312105; 121.030387, 31.312027";
community = new obj_community("蒋巷南苑", '1172', borderPointsString, points);
_communities.push(community);
//邵村家园
points = [];
borderPointsString = "121.033928, 31.319493; 121.034981, 31.319724; 121.037153, 31.320263; 121.037797, 31.317961; 121.034456, 31.317148; 121.034348, 31.317245; 121.033928, 31.319493";
community = new obj_community("邵村家园", '680', borderPointsString, points);
_communities.push(community);
//蒋巷北苑
points = [];
borderPointsString = "121.030094, 31.31364; 121.030196, 31.313636; 121.034856, 31.313358; 121.035064, 31.313321; 121.034769, 31.311979; 121.03471, 31.311879; 121.031851, 31.312013; 121.030489, 31.312115; 121.030398, 31.312142; 121.030094, 31.31364";
community = new obj_community("蒋巷北苑", '830', borderPointsString, points);
_communities.push(community);
//博怡轩
points = [];
borderPointsString = "121.033965, 31.316931; 121.03788, 31.31785; 121.038224, 31.316509; 121.035547, 31.313986; 121.034876, 31.313757; 121.033965, 31.316931";
community = new obj_community("博怡轩", '1280', borderPointsString, points);
_communities.push(community);
//杏花南苑
points = [];
borderPointsString = "121.037854, 31.320018; 121.038204, 31.320126; 121.038151, 31.320311; 121.039282, 31.320628; 121.039453, 31.320103; 121.040113, 31.320288; 121.0401, 31.320431; 121.040071, 31.320874; 121.041184, 31.32119; 121.041326, 31.320928; 121.041357, 31.320786; 121.041326, 31.320578; 121.041133, 31.320107; 121.041088, 31.320003; 121.041196, 31.319648; 121.041409, 31.3192; 121.038889, 31.31846; 121.038721, 31.31848; 121.038797, 31.318256; 121.038433, 31.318167; 121.037854, 31.320018";
community = new obj_community("杏花南苑", '240', borderPointsString, points);
_communities.push(community);
//邵村南苑
points = [];
borderPointsString = "121.029614, 31.316739; 121.030193, 31.314001; 121.034716, 31.313677; 121.034846, 31.313739; 121.033962, 31.316828; 121.033059, 31.316793; 121.03318, 31.316222; 121.031392, 31.316265; 121.031392, 31.316758; 121.029614, 31.316739";
community = new obj_community("邵村南苑", '1740', borderPointsString, points);
_communities.push(community);

_villages.push(new obj_village("邵村", _communities));
_communities = [];

//宜家花园
points = [];
borderPointsString = "121.011643, 31.34786; 121.011409, 31.34702; 121.011338, 31.347001; 121.009168, 31.347227; 121.009087, 31.347235; 121.009087, 31.347131; 121.008683, 31.347197; 121.008809, 31.348115; 121.011643, 31.34786";
community = new obj_community("宜家花园", '204', borderPointsString, points);
_communities.push(community);
//龙邑小区
points = [];
borderPointsString = "121.008805, 31.344606; 121.009757, 31.344526; 121.010454, 31.345701; 121.008895, 31.34584; 121.008805, 31.344606";
community = new obj_community("龙邑小区", '130', borderPointsString, points);
_communities.push(community);
//沙葛新村
points = [];
borderPointsString = "120.999616, 31.348759; 121.003587, 31.348334; 121.003495, 31.346909; 120.999405, 31.347263; 120.999616, 31.348759";
community = new obj_community("沙葛新村", '710', borderPointsString, points);
_communities.push(community);
//珠竹花苑
points = [];
borderPointsString = "121.006194, 31.343643; 121.008588, 31.343357; 121.008489, 31.342814; 121.008757, 31.34261; 121.008595, 31.342317; 121.008541, 31.342202; 121.008514, 31.342017; 121.008541, 31.341847; 121.008541, 31.341423; 121.008236, 31.340767; 121.005828, 31.341276; 121.006001, 31.341877; 121.006044, 31.342171; 121.006053, 31.342279; 121.006026, 31.34261; 121.006194, 31.343643";
community = new obj_community("珠竹花苑", '640', borderPointsString, points);
_communities.push(community);
//佳茂缘
points = [];
borderPointsString = "121.019851, 31.347691; 121.019931, 31.348416; 121.020015, 31.349529; 121.020512, 31.349535; 121.021472, 31.347308; 121.021342, 31.347233; 121.019803, 31.347364; 121.019851, 31.347691";
community = new obj_community("佳茂缘", '368', borderPointsString, points);
_communities.push(community);
//摩玛公社
points = [];
borderPointsString = "121.01141, 31.346892; 121.011737, 31.347891; 121.013199, 31.347752; 121.013118, 31.346699; 121.011501, 31.346784; 121.01141, 31.346892";
community = new obj_community("摩玛自由城", '710', borderPointsString, points);
_communities.push(community);
//青春雅居一期
points = [];
borderPointsString = "121.000048, 31.344373;  120.999805, 31.342877; 121.000048, 31.344373;121.006105, 31.343672;121.00575, 31.34117;121.003648, 31.341794;121.003435, 31.34195;120.999805, 31.342877";
community = new obj_community("青春雅居", '3012', borderPointsString, points);
_communities.push(community);
//青春雅居二期
points = [];
//borderPointsString = "121.003648, 31.341794; 121.003435, 31.34195; 121.003456, 31.342817; 121.00348, 31.343066; 121.00359, 31.343969; 121.006105, 31.343672; 121.006011, 31.342631; 121.005952, 31.342616; 121.00575, 31.34117; 121.003756, 31.341756; 121.003648, 31.341794";
borderPointsString = "121.00575, 31.34117; 121.003756, 31.341756; 121.003648, 31.341794";
community = new obj_community("青春雅居", '3012', borderPointsString, points);
_communities.push(community);

_villages.push(new obj_village("青春雅居", _communities));
_communities = [];

//夏桥家园
points = [];
borderPointsString = "121.050922, 31.348872; 121.051313, 31.347098; 121.054408, 31.346678; 121.055288, 31.346528; 121.05584, 31.34859; 121.051937, 31.34908; 121.051259, 31.349022; 121.050922, 31.348872";
community = new obj_community("夏桥家园", '1274', borderPointsString, points);
_communities.push(community);
//夏桥花园
points = [];
borderPointsString = "121.055361, 31.346507; 121.055929, 31.348534; 121.060293, 31.347974; 121.060077, 31.34687; 121.059838, 31.345779; 121.055361, 31.346507";
community = new obj_community("夏桥花园", '1402', borderPointsString, points);
_communities.push(community);

_villages.push(new obj_village("夏桥", _communities));
_communities = [];

//联谊花园
points = [];
borderPointsString = "121.059756, 31.315344; 121.061281, 31.31592; 121.062377, 31.314155; 121.060963, 31.313658; 121.060537, 31.31465; 121.060005, 31.314426; 121.059756, 31.315344";
community = new obj_community("联谊花园", '628', borderPointsString, points);
_communities.push(community);
//碧湖苑
points = [];
borderPointsString = "121.053307, 31.321057; 121.052458, 31.322086; 121.052251, 31.321944; 121.052386, 31.321543; 121.052458, 31.321392; 121.052453, 31.321138; 121.052449, 31.320713; 121.052543, 31.320571; 121.052614, 31.320624; 121.053307, 31.321057";
community = new obj_community("碧湖苑", '117', borderPointsString, points);
_communities.push(community);
//长丰新村
points = [];
borderPointsString = "121.054166, 31.317269; 121.055032, 31.317547; 121.055438, 31.316659; 121.054387, 31.316286; 121.054166, 31.317269";
community = new obj_community("长丰新村", '215', borderPointsString, points);
_communities.push(community);
//菉溪新村
points = [];
borderPointsString = "121.053321, 31.316854; 121.053276, 31.317231; 121.052782, 31.317295; 121.052655, 31.317758; 121.051956, 31.318633; 121.052834, 31.31911; 121.053687, 31.317896; 121.053801, 31.317813; 121.053868, 31.317689; 121.054023, 31.31701; 121.053321, 31.316854";
community = new obj_community("菉溪新村", '327', borderPointsString, points);
_communities.push(community);

_villages.push(new obj_village("陆家村", _communities));
_communities = [];

//常发豪郡(南区)
points = [];
borderPointsString = "121.070629, 31.342828; 121.070494, 31.342786; 121.070431, 31.342574; 121.070378, 31.34134; 121.07018, 31.340292; 121.072264, 31.339659; 121.072466, 31.339702; 121.072596, 31.339682; 121.072763, 31.339628; 121.074874, 31.338973; 121.075929, 31.341255; 121.070629, 31.342828";
community = new obj_community("常发豪郡南区", '3358', borderPointsString, points);
_communities.push(community);
//常发豪郡(北区)
points = [];
borderPointsString = "121.074343, 31.342228;121.074268, 31.342035;121.070868, 31.343074;121.07113, 31.343567;121.073589, 31.34381;121.075231, 31.343915;121.076762, 31.343531;121.076826, 31.343381;121.07629, 31.342166;121.075551, 31.342383;121.075369, 31.341946;121.074343, 31.342228";
community = new obj_community("常发豪郡北区", '2014', borderPointsString, points);
_communities.push(community);

_villages.push(new obj_village("泗桥", _communities));
_communities = [];

//陈巷花园
points = [];
borderPointsString = "121.039854, 31.315169; 121.043348, 31.315845; 121.043547, 31.314913; 121.043595, 31.31243; 121.043606, 31.311466; 121.040896, 31.311512; 121.040869, 31.311012; 121.037926, 31.311107; 121.038131, 31.31191; 121.037518, 31.312007; 121.037743, 31.312763; 121.039144, 31.314066; 121.039854, 31.315169";
community = new obj_community("陈巷花园", '4148', borderPointsString, points);
_communities.push(community);

_villages.push(new obj_village("陈巷", _communities));
_communities = [];

//阳光新第
points = [];
borderPointsString = "121.0398, 31.324027; 121.041449, 31.324471; 121.041649, 31.323648; 121.041059, 31.323506; 121.040892, 31.323321; 121.040774, 31.322945; 121.04011, 31.322822; 121.0398, 31.324027";
community = new obj_community("阳光新第", '228', borderPointsString, points);
_communities.push(community);
//香花苑
points = [];
borderPointsString = "121.036398, 31.324383; 121.036755, 31.323349; 121.040027, 31.324286; 121.039908, 31.324591; 121.040256, 31.324896; 121.041155, 31.325027; 121.041024, 31.325385; 121.036398, 31.324383";
community = new obj_community("香花苑", '798', borderPointsString, points);
_communities.push(community);
//邵村北苑
points = [];
borderPointsString = "121.034522, 31.31982; 121.033959, 31.319714; 121.033503, 31.322944; 121.036296, 31.323053; 121.037111, 31.320434; 121.035782, 31.320122; 121.034522, 31.31982";
community = new obj_community("邵村北苑", '960', borderPointsString, points);
_communities.push(community);
//杏花北苑
points = [];
borderPointsString = "121.036776, 31.323206; 121.037562, 31.320622; 121.03803, 31.320722; 121.037949, 31.320931; 121.03966, 31.321351; 121.041147, 31.321787; 121.041066, 31.322118; 121.041713, 31.322284; 121.04191, 31.322396; 121.041899, 31.322583; 121.041778, 31.323053; 121.041651, 31.323594; 121.041479, 31.323559; 121.041003, 31.323429; 121.04085, 31.323155; 121.040778, 31.322897; 121.04015, 31.322816; 121.04001, 31.323414; 121.039808, 31.324062; 121.037899, 31.323502; 121.036776, 31.323206";
community = new obj_community("杏花北苑", '278', borderPointsString, points);
_communities.push(community);
//山水江南
points = [];
borderPointsString = "121.032752, 31.328606; 121.034583, 31.328962; 121.03552, 31.325727; 121.033606, 31.325359; 121.032752, 31.328606";
community = new obj_community("山水江南", '1267', borderPointsString, points);
_communities.push(community);
//东景苑
points = [];
borderPointsString = "121.036166, 31.323483; 121.035584, 31.325558; 121.034654, 31.325365; 121.0333, 31.325145; 121.031856, 31.324835; 121.032227, 31.32334; 121.036166, 31.323483";
community = new obj_community("东景苑", '1047', borderPointsString, points);
_communities.push(community);

_villages.push(new obj_village("车塘", _communities));
_communities = [];

var _polygons_community = [];
//添加小区边界显示
export function getBoundary_Community(map) {
  var pointArray = [];
  for (var key in _villages) {
    for (var i = 0; i < _villages[key].communities.length; i++) {
      var curCommunity = _villages[key].communities[i];
      var ply = new BMapGL.Polygon(curCommunity.borderPoints, { strokeWeight: 4, strokeColor: "#ffffff" }); //建立多边形覆盖物
      ply.setFillColor("#ffffff");   //设置多边形的填充颜色
      ply.setFillOpacity(0.35);
      ply.villageName = _villages[key].name;
      ply.community = curCommunity;
      _polygons_community.push(ply);
      ply.addEventListener('click', function (e) {
        showPop_Community(e.target.villageName, e.target.community);
      });
      map.addOverlay(ply);  //添加覆盖物
      pointArray = pointArray.concat(ply.getPath());
    }
  }

  //map.setViewport(pointArray);    //调整视野
  addLabels_community(map);
}
var map;
var num;
var data;
const cameraUrl = "http://lujiaapi.zheyousoft.cn/";
//const cameraUrl = "http://lujia5test.zheyousoft.cn/";
export function leixing(int, da) {
  num = int
  if (data == null || data == undefined || data == '') {
    data = da
  } else {
    console.log("data已经有值了")
  }

}
import { popstat } from "../common"
var dic_rubbishPointsList_tou = [[], [], [], [], [], [], []]
var index = ""
export function showPop_Community(villageName, obj) {
  var zhuangtai = popstat()

  if (zhuangtai) {

  } else {
    let array = new Array
    obj.borderPoints.split(";").forEach(element => {
      array.push(element.split(","))
    });
    dic_rubbishPointsList_tou = [[], [], [], [], [], [], [], []]
    $.ajax({
      url: cameraUrl + "api2/main/cells",
      type: "get",
      async: false,
      headers: {      //请求头
        Accept: "application/json; charset=utf-8",
      },
      success: function (res) {
        for (const key in res) {
          console.log(res[key]);
          console.log(obj.name);

          if (res[key].townName == obj.name) {
            index = res[key].uniqueId
            for (const ele of data[0]) {
              if (ele.cellId == res[key].uniqueId) {
                dic_rubbishPointsList_tou[0].push(ele)
              }
            }
            for (const ele of data[1]) {
              if (ele.cellId == res[key].uniqueId) {
                dic_rubbishPointsList_tou[1].push(ele)
              }
            }
            for (const ele of data[2]) {
              if (ele.cellId == res[key].uniqueId) {
                dic_rubbishPointsList_tou[2].push(ele)
              }
            }
            for (const ele of data[3]) {
              if (ele.cellId == res[key].uniqueId) {
                dic_rubbishPointsList_tou[3].push(ele)
              }
            }
            for (const ele of data[4]) {
              if (ele.cellId == res[key].uniqueId) {
                dic_rubbishPointsList_tou[4].push(ele)
              }
            }
            for (const ele of data[5]) {
              if (ele.cellId == res[key].uniqueId) {
                dic_rubbishPointsList_tou[5].push(ele)
              }
            }
            for (const ele of data[6]) {
              if (ele.cellId == res[key].uniqueId) {
                dic_rubbishPointsList_tou[6].push(ele)
              }
            }
            for (const ele of data[7]) {
              if (ele.cellId == res[key].uniqueId) {
                dic_rubbishPointsList_tou[7].push(ele)
              }
            }
          }
        }

      }
    })

    console.log(data[7])
    var imgSrc = "../../../static/image/_community/";

    $("div#toufangxiaoqu .name").html(obj.name);
    $("div#toufangxiaoqu .totalHouse").html(obj.totalHouse);
    $("div#toufangxiaoqu .village").html(villageName);
    $("div#toufangxiaoqu").css("display", "block");


    let x = 0;
    let y = 0;
    for (let i = 0; i < array.length; i++) {
      x += parseFloat(array[i][0])
      y += parseFloat(array[i][1])
    }
    map = new BMapGL.Map("plot"); // 创建Map实例
    map.centerAndZoom(new BMapGL.Point(x / array.length, y / array.length), 19); // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    map.setHeading(64.5);
    map.setTilt(73);
    var ply = new BMapGL.Polygon(obj.borderPoints, { strokeWeight: 4, strokeColor: "#ff0000", fillColor: "#ff0000" });
    map.addOverlay(ply)


    removePoints_tou(map)
    setTimeout(() => {
      addPoints_tou(num)
      //addCamera(map, index)
    }, 500);

  }


}

export function addPoints_tou(tag) {
  var xOffset = 0;
  var yOffset = -25;
  console.log("num");

  console.log(num)

  if (num == -1) {
    console.log(dic_rubbishPointsList_tou[7]);
    for (let key in dic_rubbishPointsList_tou[7]) {
      console.log(dic_rubbishPointsList_tou[7][key]);
      if (dic_rubbishPointsList_tou[7][key].type == 2) {
        addSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[7][key].longitude, dic_rubbishPointsList_tou[7][key].latitude), "宣传栏", xOffset, yOffset, dic_rubbishPointsList_tou[7][key].boardLogo, map, dic_rubbishPointsList_tou[7][key]);
      } else {
        addSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[7][key].longitude, dic_rubbishPointsList_tou[7][key].latitude), dic_rubbishPointsList_tou[7][key].putPointTypeName, xOffset, yOffset, dic_rubbishPointsList_tou[7][key].putPointTypeLogo, map, dic_rubbishPointsList_tou[7][key]);
      }

    }

    // for (let key in dic_rubbishPointsList_tou[1]) {
    //   console.log(dic_rubbishPointsList_tou[1])
    //   addSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[1][key].longitude, dic_rubbishPointsList_tou[1][key].latitude), dic_rubbishPointsList_tou[1][key].putPointTypeName, xOffset, yOffset, dic_rubbishPointsList_tou[1][key].putPointTypeLogo, map, dic_rubbishPointsList_tou[1][key]);
    // }
    // for (let key in dic_rubbishPointsList_tou[2]) {
    //   addSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[2][key].longitude, dic_rubbishPointsList_tou[2][key].latitude), dic_rubbishPointsList_tou[2][key].putPointTypeName, xOffset, yOffset, dic_rubbishPointsList_tou[2][key].putPointTypeLogo, map, dic_rubbishPointsList_tou[2][key]);
    // }
    // for (let key in dic_rubbishPointsList_tou[3]) {
    //   addSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[3][key].longitude, dic_rubbishPointsList_tou[3][key].latitude), dic_rubbishPointsList_tou[3][key].putPointTypeName, xOffset, yOffset, dic_rubbishPointsList_tou[3][key].putPointTypeLogo, map, dic_rubbishPointsList_tou[3][key]);
    // }
    // for (let key in dic_rubbishPointsList_tou[4]) {
    //   addSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[4][key].longitude, dic_rubbishPointsList_tou[4][key].latitude), dic_rubbishPointsList_tou[4][key].putPointTypeName, xOffset, yOffset, dic_rubbishPointsList_tou[4][key].putPointTypeLogo, map, dic_rubbishPointsList_tou[4][key]);
    // }
    // for (let key in dic_rubbishPointsList_tou[5]) {
    //   addSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[5][key].longitude, dic_rubbishPointsList_tou[5][key].latitude), dic_rubbishPointsList_tou[5][key].putPointTypeName, xOffset, yOffset, dic_rubbishPointsList_tou[5][key].putPointTypeLogo, map, dic_rubbishPointsList_tou[5][key]);
    // }
    // for (let key in dic_rubbishPointsList_tou[6]) {
    //   addSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[6][key].longitude, dic_rubbishPointsList_tou[6][key].latitude), dic_rubbishPointsList_tou[6][key].putPointTypeName, xOffset, yOffset, dic_rubbishPointsList_tou[6][key].putPointTypeLogo, map, dic_rubbishPointsList_tou[6][key]);
    // }
    // for (let key in dic_rubbishPointsList_tou[0]) {
    //   addSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[0][key].longitude, dic_rubbishPointsList_tou[0][key].latitude), dic_rubbishPointsList_tou[0][key].putPointTypeName, xOffset, yOffset, dic_rubbishPointsList_tou[0][key].putPointTypeLogo, map, dic_rubbishPointsList_tou[0][key]);
    // }
  } else if (tag == 0) {

    for (let key in dic_rubbishPointsList_tou[1]) {
      addSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[1][key].longitude, dic_rubbishPointsList_tou[1][key].latitude), dic_rubbishPointsList_tou[1][key].putPointTypeName, xOffset, yOffset, dic_rubbishPointsList_tou[1][key].putPointTypeLogo, map, dic_rubbishPointsList_tou[1][key]);
    }
  }
  else if (tag == 1) {

    for (let key in dic_rubbishPointsList_tou[2]) {
      addSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[2][key].longitude, dic_rubbishPointsList_tou[2][key].latitude), dic_rubbishPointsList_tou[2][key].putPointTypeName, xOffset, yOffset, dic_rubbishPointsList_tou[2][key].putPointTypeLogo, map, dic_rubbishPointsList_tou[2][key]);
    }
  }
  else if (tag == 2) {

    for (let key in dic_rubbishPointsList_tou[3]) {
      addSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[3][key].longitude, dic_rubbishPointsList_tou[3][key].latitude), dic_rubbishPointsList_tou[3][key].putPointTypeName, xOffset, yOffset, dic_rubbishPointsList_tou[3][key].putPointTypeLogo, map, dic_rubbishPointsList_tou[3][key]);
    }
  }
  else if (tag == 3) {

    for (let key in dic_rubbishPointsList_tou[5]) {
      addSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[5][key].longitude, dic_rubbishPointsList_tou[5][key].latitude), dic_rubbishPointsList_tou[5][key].putPointTypeName, xOffset, yOffset, dic_rubbishPointsList_tou[5][key].putPointTypeLogo, map, dic_rubbishPointsList_tou[5][key]);
    }
  }
  else if (tag == 4) {

    for (let key in dic_rubbishPointsList_tou[4]) {
      addSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[4][key].longitude, dic_rubbishPointsList_tou[4][key].latitude), dic_rubbishPointsList_tou[4][key].putPointTypeName, xOffset, yOffset, dic_rubbishPointsList_tou[4][key].putPointTypeLogo, map, dic_rubbishPointsList_tou[4][key]);
    }
  }
  else if (tag == 5) {

    for (let key in dic_rubbishPointsList_tou[6]) {
      addSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[6][key].longitude, dic_rubbishPointsList_tou[6][key].latitude), dic_rubbishPointsList_tou[6][key].putPointTypeName, xOffset, yOffset, dic_rubbishPointsList_tou[6][key].putPointTypeLogo, map, dic_rubbishPointsList_tou[6][key]);
    }
  }
  else if (tag == 6) {
    for (let key in dic_rubbishPointsList_tou[0]) {
      addSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[0][key].longitude, dic_rubbishPointsList_tou[0][key].latitude), dic_rubbishPointsList_tou[6][key].putPointTypeName, xOffset, yOffset, dic_rubbishPointsList_tou[0][key].putPointTypeLogo, map, dic_rubbishPointsList_tou[0][key]);
    }
  }
  else {
    console.log("传入tag报错")
    console.log(tag)
  }
}
var ponitsArray_tou = [];
export function addSinglePoint_tou(point, labelText, xOffset, yOffset, icon, map, plot) {
  console.log(point, labelText, xOffset, yOffset, icon, map, plot)
  var size = new BMapGL.Size(30, 30);
  var icon = new BMapGL.Icon(icon, size);

  icon.setImageSize(size);
  var marker = new BMapGL.Marker(point, { icon: icon });

  var label = new BMapGL.Label(labelText + "(" + plot.cameraInfos.length + ")", {
    offset: new BMapGL.Size(xOffset, yOffset), styles: {
      "padding": "5px 1px", "MozUserSelect": "none",
      "backgroundColor": "#fff",
      "border": "1px solid #f00",
      "fontSize": "12px",
      "whiteSpace": "nowrap",
      "zIndex": "80"
    }
  });
  label.setStyle({
    transform: 'translateX(-50%) translateY(-50%)'//label相对坐标点自动居中显示
  })
  marker.setLabel(label);
  map.addOverlay(marker);
  marker.addEventListener("click", function () {
    showPop("投放点", plot);
  });
  ponitsArray_tou.push(marker);
}
function showPop(title, plot) {

  if (title == "建筑垃圾") {
    $("div.pop.animated .content").html($("div.append.jianzhu").html());
  }
  if (title == "绿化垃圾") {
    $("div.pop.animated .content").html($("div.append.lvhua").html());
  }

  if (title == "大件垃圾") {
    $("div.pop.animated .content").html($("div.append.dajian").html());
  }

  if (title == "可回收物") {
    $("div.pop.animated .content").html($("div.append.kehuishou").html());
  }

  if (title == "厨余垃圾") {
    $("div.pop.animated .content").html($("div.append.chuyu").html());
  }

  if (title == "宣传引导") {
    $("div.pop.animated .content").html($("div.append.xuanchuan").html());
  }

  if (title == "camera") {

    if (plot.status == 0) {
      console.log('摄像机状态关闭')
      $("div.pop.animated .content").html($("div.append.camera").html());
      $("#cameraTitle").text(cameraInfo2.title);
      $("#playWind").html("<div style='text-align:center;font-size:30px;margin-top:50px;'>摄像机状态关闭</div>")
    } else {
      $("div.pop.animated .content").html($("div.append.camera").html());
      $("#cameraTitle").text(cameraInfo2.title);
      setTimeout(function () {
        cameraInit(cameraInfo2);
      }, 500);
    }


  }

  if (title == "作业车辆") {
    $("div.pop.animated .content").html($("div.append.cheliang").html());
  }
  if (title == "投放点") {

    $.ajax({
      url: cameraUrl + "api2/main/rubbishStock?pointId=" + plot.id + "&type=" + plot.type,
      type: "get",
      async: false,
      headers: {      //请求头
        Accept: "application/json; charset=utf-8",
      },
      success: function (res) {
        let data = res;
        console.log(data);
        if (data.length == 0) {
          console.log("没数据");

          $("div.append.toufangdian #childs").html("<div style='line-height:35px;text-align:center;'>该点位暂无垃圾信息</div>")
        } else {
          var str = ""
          for (let i = 0; i < data.length; i++) {
            str += `<div style='line-height:35px;display:flex;flex-direction:row;justify-content:flex-start;align-items: center;'>
              <div style='font-size:16px;width:180px;text-align:right;'>垃圾类型:</div>
              <div style='font-size:14px;width:460px;text-align:center;'>`+ data[i].categoryName + `</div>
            </div>`
            str += `<div style='line-height:35px;display:flex;flex-direction:row;justify-content:flex-start;align-items: center;'>
            <div style='font-size:16px;width:180px;text-align:right;'>垃圾总量:</div>
            <div style='font-size:14px;width:460px;text-align:center;'>`+ data[i].stock + "(" + data[i].scale + ")" + `</div>
          </div>`
          }

          $("div.append.toufangdian #childs").html(str)
        }
      }
    });
    if (plot.cameraInfos.length > 0) {
      setTimeout(() => {
        cameraInit2(plot);
      }, 500);
    }
    $("div.append.toufangdian #playvideo").html("<div>该区域暂无监控信息</div>")
    $("div.append.toufangdian #name").text(plot.cellName + "垃圾收集点位")
    $("div.append.toufangdian #longitude").text(plot.longitude)
    $("div.append.toufangdian #latitude").text(plot.latitude)
    $("div.append.toufangdian #type").text(plot.putPointTypeName)

    $("div.pop.animated .content").html($("div.append.toufangdian").html());

  }
  if (title.indexOf("投放小区") == 0) {
    $("div.pop.animated .content").html($("div.append.toufangxiaoqu").html());
  }
  // if()
  // console.log("显示出来吗")
  // console.log($("div.append.toufangdian").html())
  // $("div.pop.animated .content").html($("div.append.toufangdian").html());

  $("div.pop.animated").css("display", "block");
}

export function removePoints_tou(map) {
  for (var i = 0; i < ponitsArray_tou.length; i++) {
    map.removeOverlay(ponitsArray_tou[i]);
  }
}

//移除小区边界显示
export function removeBoundary_Community(map) {
  for (var key in _polygons_community) {
    map.removeOverlay(_polygons_community[key]);
  }
  removeLabels_community(map);
}

var labelArray_community = [];
//添加小区标注
export function addLabels_community(map) {
  labelArray_community = [];
  var pointArray = [
    //神童泾社区--缺少徐里新村
    new BMapGL.Point(121.050261, 31.321843), //珠海新村
    new BMapGL.Point(121.044193, 31.320094), //园丁新村
    new BMapGL.Point(121.046443, 31.324119), //陆电新村
    new BMapGL.Point(121.045452, 31.326625), //神童花苑
    new BMapGL.Point(121.047962, 31.320351), //南粮花园
    new BMapGL.Point(121.04584, 31.320988), //好孩子公寓
    new BMapGL.Point(121.041641, 31.329094), //云立方
    new BMapGL.Point(121.04387, 31.323957),//东方假日城
    new BMapGL.Point(121.04387, 31.321223), //富荣花园

    //邹家角
    new BMapGL.Point(121.054487, 31.324109), //水岸香堤
    new BMapGL.Point(121.052561, 31.324448), //启发广场
    new BMapGL.Point(121.061489, 31.320408), //名湖花苑(别墅)
    new BMapGL.Point(121.060177, 31.319499), //名湖花苑
    new BMapGL.Point(121.05855, 31.31859), //联谊新村
    new BMapGL.Point(121.061702, 31.317438), //桃园春天
    new BMapGL.Point(121.060404, 31.311666), //木瓜多层
    new BMapGL.Point(121.057958, 31.310043), //木瓜别墅

    //邵村社区
    new BMapGL.Point(121.032488, 31.310837), //蒋巷南苑
    new BMapGL.Point(121.035806, 31.318686), //邵村家园
    new BMapGL.Point(121.032556, 31.3128), //蒋巷北苑
    new BMapGL.Point(121.035895, 31.315976),//博怡轩
    new BMapGL.Point(121.039567, 31.319711), //杏花南苑
    new BMapGL.Point(121.032297, 31.315229), //邵村南苑
    //合丰社区
    new BMapGL.Point(121.010419, 31.347358),//宜家花园
    new BMapGL.Point(121.009351, 31.344937),//龙邑小区
    new BMapGL.Point(121.001439, 31.347805),//沙葛新村
    new BMapGL.Point(121.007383, 31.34227),//珠竹花苑
    new BMapGL.Point(121.020504, 31.34821),//佳 茂 缘
    new BMapGL.Point(121.011784, 31.34712),//摩玛公社
    new BMapGL.Point(121.001737, 31.343243),//青春雅居一期
    new BMapGL.Point(121.004716, 31.342193),//青春雅居二期


    //夏桥
    new BMapGL.Point(121.058143, 31.347145),//夏桥花园
    new BMapGL.Point(121.053513, 31.34762),//夏桥家园

    //陆家社区
    new BMapGL.Point(121.061054, 31.314802), //联谊花园
    new BMapGL.Point(121.052755, 31.321268),//碧湖苑
    new BMapGL.Point(121.054759, 31.316924), //长丰新村
    new BMapGL.Point(121.053056, 31.317969), //菉溪新村

    //泗桥社区
    new BMapGL.Point(121.072877, 31.340852), //常发豪郡(南区)
    new BMapGL.Point(121.074148, 31.34305), //常发豪郡(北区)

    //陈巷社区
    new BMapGL.Point(121.04096, 31.31338),  //陈巷花园
    //车塘社区
    new BMapGL.Point(121.040676, 31.323697), //阳光新第
    new BMapGL.Point(121.038343, 31.324327), //香花苑
    new BMapGL.Point(121.035183, 31.321481), //邵村北苑
    new BMapGL.Point(121.039131, 31.322266), //杏花北苑
    new BMapGL.Point(121.034119, 31.327151), //山水江南
    new BMapGL.Point(121.034083, 31.324169),//东景苑

  ];

  var optsArray = [];

  //小区标签
  var contentArray = [
    '珠海新村',
    '园丁新村',
    '陆电新村',
    '神童花苑',
    '南粮花园',
    '好孩子公寓',
    '云立方',
    '东方假日城',
    '富荣花园',
    '水岸香堤',
    '启发广场',
    '名湖别墅',
    '名湖花苑',
    '联谊新村',
    '桃园春天',
    '木瓜多层',
    '木瓜别墅',
    '蒋巷南苑',
    '邵村家园',
    '蒋巷北苑',
    '博怡轩',
    '杏花南苑',
    '邵村南苑',
    '宜家花园',
    '龙邑小区',
    '沙葛新村',
    '珠竹花苑',
    '佳茂缘',
    '摩玛公社',
    '青春雅居一期',
    '青春雅居二期',
    '夏桥花园',
    '夏桥家园',
    '联谊花园',
    '碧湖苑',
    '长丰新村',
    '菉溪新村',
    '常发豪郡(南区)',
    '常发豪郡(北区)',
    '陈巷花园',
    '阳光新第',
    '香花苑',
    '邵村北苑',
    '杏花北苑',
    '山水江南',
    '东景苑'
  ];
  for (var i = 0; i < pointArray.length; i++) {
    optsArray[i] = {};
    optsArray[i].position = pointArray[i];
    labelArray_community[i] = new BMapGL.Label(contentArray[i], optsArray[i]);
    labelArray_community[i].setStyle({
      color: "white",
      fontSize: "18px",
      height: "30px",
      lineHeight: "30px",
      textAlign: "center",
      //backgroundColor: "#333333",
      backgroundColor: "transparent",
      textShadow: "0 0 4px #000000",
      //writingMode: "vertical-lr",
      fontWeight: "bold",
      border: "0",
      fontFamily: "新宋体",
      transform: 'translateX(-50%)'//label相对坐标点自动居中显示
      ////transform: 'rotate(45deg) translateX(-50%)'//label相对坐标点自动居中显示
    });

    labelArray_community[i].setTitle(contentArray[i]);
    //labelArray_community[i].addEventListener('click', function (e) {
    //    showPop_Community();
    //});
    map.addOverlay(labelArray_community[i]);
  }
}
//隐藏小区标注
export function removeLabels_community(map) {
  for (var i = 0; i < labelArray_community.length; i++) {
    map.removeOverlay(labelArray_community[i]);
  }
}




export function obj_village(name, communities) {
  this.name = name;
  this.communities = communities;
}
//小区对象
export function obj_community(name, totalHouse, borderPoints, points) {
  this.name = name;
  this.totalHouse = totalHouse;//总户数
  this.borderPoints = borderPoints;//边界点坐标集合字符串
  this.points = points;//小区投放点集合
}
//小区点位对象
export function obj_point(name, point, type) {
  this.name = name;
  this.point = point;
  this.type = type;//类别：再生资源、有害、宣传栏
}









var cameraArray = [];
var cameraList = [];
//添加监控
export function addCamera(map, id) {
  var xOffset = 0;
  var yOffset = -25;
  //添加监控修改地图监控名称
  console.log(id)
  $.ajax({
    url: cameraUrl + "api2/CameraInfo/list",
    type: "get",
    // async: false,
    headers: {      //请求头
      Accept: "application/json; charset=utf-8",
    },
    success: function (res) {
      let data = res;
      for (var i = 0; i < data.length; i++) {
        var areaInfo = data[i];
        var cameraArray = areaInfo.cameraInfos;
        if (areaInfo.areaType == 1)//处置点只显示一个
        {
          var labelText = areaInfo.areaName + '(' + areaInfo.number + ')';
          addSingleCamera(xOffset, yOffset, cameraArray[0], labelText, areaInfo, map);
        } else {
          for (let index = 0; index < cameraArray.length; index++) {
            const element = cameraArray[index];
            addSingleCamera(xOffset, yOffset, element, element.channelName, areaInfo, map);
            // == id
          }
        }

      }

    }
  });
}
export function addSingleCamera(xOffset, yOffset, cameraInfo, labelText, areaInfo, map) {
  // 没有经纬度信息就不显示坐标点了
  if (cameraInfo.longitude == null || cameraInfo.latitude == null) {
    return;
  }

  var size = new BMapGL.Size(30, 30);
  var icon = new BMapGL.Icon('./static/image/icon/shexiangtou.png', size);
  var point = new BMapGL.Point(Number(cameraInfo.longitude), Number(cameraInfo.latitude));
  icon.setImageSize(size);
  var marker = new BMapGL.Marker(point, { icon: icon });

  //marker.setAnimation(BMAP_ANIMATION_BOUNCE);//跳动效果

  var label = new BMapGL.Label(labelText, {
    offset: new BMapGL.Size(xOffset, yOffset), styles: {
      "padding": "5px 1px", "MozUserSelect": "none",
      "backgroundColor": "#fff",
      "border": "1px solid #f00",
      "fontSize": "12px",
      "whiteSpace": "nowrap",
      "zIndex": "80"
    }
  });
  label.setStyle({
    transform: 'translateX(-50%)'//label相对坐标点自动居中显示
  })
  marker.setLabel(label);

  // 添加点击事件
  marker.addEventListener('click', function (e) {
    showRealTimeCamera(areaInfo, cameraInfo);
  });
  map.addOverlay(marker);
  cameraArray.push(marker);
}

var lookInfo = {};
var cameraInfo2;
var videotao = []
export function showRealTimeCamera(areaInfo, cameraInfo) {

  lookInfo = areaInfo;
  console.log("cameraInfo")
  console.log(cameraInfo)
  if (areaInfo.areaType == 0) {
    console.log("areaInfo.areaType==0:未知")
    cameraInfo.title = cameraInfo.areaName + "(" + cameraInfo.channelName + ")";
    var array = [cameraInfo];
    cameraInfo.url = cameraInfo.viewUrl;
    cameraInfo.token = areaInfo.token;

    cameraInfo2 = cameraInfo;

    showPop("camera", cameraInfo);

  } else if (areaInfo.areaType == 3) {
    console.log("areaInfo.areaType==3:道路")
    cameraInfo.title = cameraInfo.areaName + "(" + cameraInfo.channelName + ")";
    var array = [cameraInfo];
    cameraInfo.url = cameraInfo.viewUrl;
    cameraInfo.token = areaInfo.token;
    cameraInfo2 = cameraInfo;
    showPop("camera", cameraInfo);
  } else if (areaInfo.areaType == 2) {

    cameraInfo.title = cameraInfo.areaName + "(" + cameraInfo.channelName + ")";
    var array = [cameraInfo];
    cameraInfo.url = cameraInfo.viewUrl;
    cameraInfo.token = areaInfo.token;
    cameraInfo2 = cameraInfo;
    showPop("camera", cameraInfo);
  } else {

    // 处理厂显示一个title
    cameraInfo.title = cameraInfo.areaName + "(" + areaInfo.cameraInfos.length + ")";
    // 处理厂批量获取监控地址
    cameraInfo2 = cameraInfo;
    var len = areaInfo.cameraInfos;

    // 每个摄像机添加url、token，其他和areaInfo一致
    for (let index = 0; index < len; index++) {
      const element = res[index];
      lookInfo.cameraInfos[index].url = element.url;
      lookInfo.cameraInfos[index].token = element.token;
    }

    showPop("camera", cameraInfo);
  }
}

import EZUIKit from "../ezuikit.js"
var decoder;

function cameraInit(cameraInfo) {
  let newlookInfo;
  //"摄像机点击事件触发"
  console.log("cameraInit事件")
  console.log(cameraInfo);

  $.ajax({
    url: cameraUrl + "api2/CameraInfo/list?page=0&size=500",
    type: "get",
    async: false,
    headers: {      //请求头
      Accept: "application/json; charset=utf-8",
    }, success(res) {
      for (let i = 0; i < res.length; i++) {
        if (cameraInfo.areaId == res[i].areaId) {
          newlookInfo = res[i]
        }
      }
    }
  })
  //因为token会过期,所以再次请求摄像头信息接口
  var url = '';//播放地址
  var accessToken = "";  //token
  console.log("newlookInfo");
  console.log(newlookInfo)
  /**
   * cameraInfo.cameraType==1是萤石云的
   * cameraInfo.cameraType==2是HLS的
   * newlookInfo.areaType==1是处理厂
   * newlookInfo算是这个大块的数据
   */
  if (cameraInfo.cameraType == 1) {
    function handleError(e) {
      console.log('捕获到错误', e)
    }
    function handleSuccess() {
      console.log("播放成功回调函数，此处可执行播放成功后续动作");
    }
    //萤石云摄像
    if (newlookInfo.areaType == 1) {
      //newlookInfo.areaType,处置点摄像头
      for (let index = 0; index < newlookInfo.cameraInfos.length; index++) {
        if (newlookInfo.cameraInfos[index].status == 1) {
          url += newlookInfo.cameraInfos[index].viewUrl;
          url += ","
        }
      }
      url = url.substring(0, url.length - 1)
      accessToken = newlookInfo.token
      //处置点 分屏展示
      decoder = new EZUIKit.EZUIPlayer({
        id: 'playWind',
        autoplay: true,
        url,
        accessToken,
        decoderPath: './static/js',
        width: 640,
        height: 400,
        splitBasis: 2, // 1*1 2*2 3*3 4*4
      });
    } else {
      url = cameraInfo.viewUrl;
      accessToken = newlookInfo.token
      decoder = new EZUIKit.EZUIPlayer({
        id: 'playWind',
        autoplay: true,
        url,
        accessToken,
        decoderPath: './static/js',
        width: 640,
        height: 400,
        handleError: handleError,
        handleSuccess: handleSuccess,
      });
    }
    //萤石云打印日志
    // 这里是打印日志，本例抛出到播放页面
    decoder.on('log', log);
    function log(str, className) {
      var s = (new Date()).Format('yyyy-MM-dd hh:mm:ss.S') + JSON.stringify(str);
      console.log(s);
    }
  }
  else if (cameraInfo.cameraType == 2) {
    //HLS摄像
    let cc = `<div><video id='my-video' class='video-js' style='margin:0 auto;' controlspreload='auto' width='605' height='400' data-setup='{}' ><source id='video-source' headers='zzzzzz' src=` + cameraInfo.viewUrl + ` type='application/x-mpegURL'></video></div>`
    $("#playWind").html(cc);
    //设置资源路径



    videojs.addLanguage("zh-CN", {
      Play: "播放",
      Pause: "暂停",
      "Current Time": "当前时间",
      Duration: "时长",
      "Remaining Time": "剩余时间",
      "Stream Type": "媒体流类型",
      LIVE: "直播",
      Loaded: "加载完毕",
      Progress: "进度",
      Fullscreen: "全屏",
      "Non-Fullscreen": "退出全屏",
      Mute: "静音",
      Unmute: "取消静音",
      "Playback Rate": "播放速度",
      Subtitles: "字幕",
      "subtitles off": "关闭字幕",
      Captions: "内嵌字幕",
      "captions off": "关闭内嵌字幕",
      Chapters: "节目段落",
      "Close Modal Dialog": "关闭弹窗",
      Descriptions: "描述",
      "descriptions off": "关闭描述",
      "Audio Track": "音轨",
      "You aborted the media playback": "视频播放被终止",
      "A network error caused the media download to fail part-way.":
        "网络错误导致视频下载中途失败。",
      "The media could not be loaded, either because the server or network failed or because the format is not supported.":
        "视频因格式不支持或者服务器或网络的问题无法加载。",
      "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.":
        "由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。",
      "No compatible source was found for this media.":
        "无法找到此视频兼容的源。",
      "The media is encrypted and we do not have the keys to decrypt it.":
        "视频已加密，无法解密。",
      "Play Video": "播放视频",
      Close: "关闭",
      "Modal Window": "弹窗",
      "This is a modal window": "这是一个弹窗",
      "This modal can be closed by pressing the Escape key or activating the close button.":
        "可以按ESC按键或启用关闭按钮来关闭此弹窗。",
      ", opens captions settings dialog": ", 开启标题设置弹窗",
      ", opens subtitles settings dialog": ", 开启字幕设置弹窗",
      ", opens descriptions settings dialog": ", 开启描述设置弹窗",
      ", selected": ", 选择",
      "captions settings": "字幕设定",
      "Audio Player": "音频播放器",
      "Video Player": "视频播放器",
      Replay: "重播",
      "Progress Bar": "进度小节",
      "Volume Level": "音量",
      "subtitles settings": "字幕设定",
      "descriptions settings": "描述设定",
      Text: "文字",
      White: "白",
      Black: "黑",
      Red: "红",
      Green: "绿",
      Blue: "蓝",
      Yellow: "黄",
      Magenta: "紫红",
      Cyan: "青",
      Background: "背景",
      Window: "视窗",
      Transparent: "透明",
      "Semi-Transparent": "半透明",
      Opaque: "不透明",
      "Font Size": "字体尺寸",
      "Text Edge Style": "字体边缘样式",
      None: "无",
      Raised: "浮雕",
      Depressed: "压低",
      Uniform: "均匀",
      Dropshadow: "下阴影",
      "Font Family": "字体库",
      "Proportional Sans-Serif": "比例无细体",
      "Monospace Sans-Serif": "单间隔无细体",
      "Proportional Serif": "比例细体",
      "Monospace Serif": "单间隔细体",
      Casual: "舒适",
      Script: "手写体",
      "Small Caps": "小型大写字体",
      Reset: "重启",
      "restore all settings to the default values": "恢复全部设定至预设值",
      Done: "完成",
      "Caption Settings Dialog": "字幕设定视窗",
      "Beginning of dialog window. Escape will cancel and close the window.":
        "开始对话视窗。离开会取消及关闭视窗",
      "End of dialog window.": "结束对话视窗"
    })
    var myPlayer = videojs("my-video");

    videojs("my-video").ready(function () {
      var myPlay = this;

      this.on("error", function () {
        console.log("加载错误")
        $("#toast").css("display", "block")
        setTimeout(() => {
          $("#toast").css("display", "none")
        }, 5000);
      });

      myPlay.play();
      videotao.push(this)
    }

    );



  } else {
    console.log("cameraInfo判断错误")
    console.log(cameraInfo)
  }





  /**摄像机弹窗事件结束 */
}


function cameraInit2(cameraInfo) {
  $("#playvideo").html("")
  let newlookInfo;

  $.ajax({
    url: cameraUrl + "api2/CameraInfo/list?page=0&size=500",
    type: "get",
    async: false,
    headers: {      //请求头
      Accept: "application/json; charset=utf-8",
    }, success(res) {
      for (let i = 0; i < res.length; i++) {
        if (cameraInfo.cameraInfos[0].areaId == res[i].areaId) {
          newlookInfo = res[i]
        }
      }
    }
  })

  if (cameraInfo.cameraInfos[0].cameraType == 1) {

    function handleError(e) {
      console.log('捕获到错误', e)
    }
    function handleSuccess() {
      console.log("播放成功回调函数，此处可执行播放成功后续动作");
    }
    //萤石云摄像
    //newlookInfo.areaType,处置点摄像头
    if (newlookInfo.areaType == 1) {
      for (let index = 0; index < newlookInfo.cameraInfos.length; index++) {
        if (newlookInfo.cameraInfos[index].status == 1) {
          url += newlookInfo.cameraInfos[index].viewUrl;
          url += ","
        }
      }
      url = url.substring(0, url.length - 1)
      accessToken = newlookInfo.token
      //处置点 分屏展示
      decoder = new EZUIKit.EZUIPlayer({
        id: 'playWind',
        autoplay: true,
        url,
        accessToken,
        decoderPath: './static/js',
        width: 640,
        height: 400,
        splitBasis: 2, // 1*1 2*2 3*3 4*4
      });
    } else {
      if (cameraInfo.status == 1) {
        url = cameraInfo.cameraInfos[0].viewUrl;
        accessToken = newlookInfo.token
        decoder = new EZUIKit.EZUIPlayer({
          id: 'playWind',
          autoplay: true,
          url,
          accessToken,
          decoderPath: './static/js',
          width: 640,
          height: 400,
          handleError: handleError,
          handleSuccess: handleSuccess,
        });
      }
    }
    //萤石云打印日志
    // 这里是打印日志，本例抛出到播放页面
    decoder.on('log', log);
    function log(str, className) {
      var s = (new Date()).Format('yyyy-MM-dd hh:mm:ss.S') + JSON.stringify(str);
      console.log(s);
    }
  } else if (cameraInfo.cameraInfos[0].cameraType == 2) {
    //HLS摄像

    if (cameraInfo.cameraInfos.length > 1) {
      for (let z = 0; z < cameraInfo.cameraInfos.length; z++) {

        let cc = `<div><video id='myvideo` + z + `' class='video-js' controlspreload='auto' width='320' height='200' data-setup='{}'><source id='video-source' src=` + cameraInfo.cameraInfos[z].viewUrl + ` type='application/x-mpegURL'></video></div>`
        $("#playvideo" + z).html(cc);
        //设置资源路径
        videojs.addLanguage("zh-CN", {
          Play: "播放",
          Pause: "暂停",
          "Current Time": "当前时间",
          Duration: "时长",
          "Remaining Time": "剩余时间",
          "Stream Type": "媒体流类型",
          LIVE: "直播",
          Loaded: "加载完毕",
          Progress: "进度",
          Fullscreen: "全屏",
          "Non-Fullscreen": "退出全屏",
          Mute: "静音",
          Unmute: "取消静音",
          "Playback Rate": "播放速度",
          Subtitles: "字幕",
          "subtitles off": "关闭字幕",
          Captions: "内嵌字幕",
          "captions off": "关闭内嵌字幕",
          Chapters: "节目段落",
          "Close Modal Dialog": "关闭弹窗",
          Descriptions: "描述",
          "descriptions off": "关闭描述",
          "Audio Track": "音轨",
          "You aborted the media playback": "视频播放被终止",
          "A network error caused the media download to fail part-way.":
            "网络错误导致视频下载中途失败。",
          "The media could not be loaded, either because the server or network failed or because the format is not supported.":
            "视频因格式不支持或者服务器或网络的问题无法加载。",
          "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.":
            "由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。",
          "No compatible source was found for this media.":
            "无法找到此视频兼容的源。",
          "The media is encrypted and we do not have the keys to decrypt it.":
            "视频已加密，无法解密。",
          "Play Video": "播放视频",
          Close: "关闭",
          "Modal Window": "弹窗",
          "This is a modal window": "这是一个弹窗",
          "This modal can be closed by pressing the Escape key or activating the close button.":
            "可以按ESC按键或启用关闭按钮来关闭此弹窗。",
          ", opens captions settings dialog": ", 开启标题设置弹窗",
          ", opens subtitles settings dialog": ", 开启字幕设置弹窗",
          ", opens descriptions settings dialog": ", 开启描述设置弹窗",
          ", selected": ", 选择",
          "captions settings": "字幕设定",
          "Audio Player": "音频播放器",
          "Video Player": "视频播放器",
          Replay: "重播",
          "Progress Bar": "进度小节",
          "Volume Level": "音量",
          "subtitles settings": "字幕设定",
          "descriptions settings": "描述设定",
          Text: "文字",
          White: "白",
          Black: "黑",
          Red: "红",
          Green: "绿",
          Blue: "蓝",
          Yellow: "黄",
          Magenta: "紫红",
          Cyan: "青",
          Background: "背景",
          Window: "视窗",
          Transparent: "透明",
          "Semi-Transparent": "半透明",
          Opaque: "不透明",
          "Font Size": "字体尺寸",
          "Text Edge Style": "字体边缘样式",
          None: "无",
          Raised: "浮雕",
          Depressed: "压低",
          Uniform: "均匀",
          Dropshadow: "下阴影",
          "Font Family": "字体库",
          "Proportional Sans-Serif": "比例无细体",
          "Monospace Sans-Serif": "单间隔无细体",
          "Proportional Serif": "比例细体",
          "Monospace Serif": "单间隔细体",
          Casual: "舒适",
          Script: "手写体",
          "Small Caps": "小型大写字体",
          Reset: "重启",
          "restore all settings to the default values": "恢复全部设定至预设值",
          Done: "完成",
          "Caption Settings Dialog": "字幕设定视窗",
          "Beginning of dialog window. Escape will cancel and close the window.":
            "开始对话视窗。离开会取消及关闭视窗",
          "End of dialog window.": "结束对话视窗"
        })
        var myPlayer = videojs("myvideo" + z);
        videojs("myvideo" + z).ready(function () {
          var myPlay = this;
          myPlay.play();
          videotao.push(this)
          this.on("error", function () {
            console.log("加载错误")
            $("#toast").css("display", "block")
            setTimeout(() => {
              $("#toast").css("display", "none")
            }, 5000);
          });
        });
      }
    } else {
      if (cameraInfo.cameraInfos[0].status == 1) {
        let cc = `<div><video id='myvideo' class='video-js' style='margin:0 auto;' controlspreload='auto' width='605' height='400' data-setup='{}'><source id='video-source' src=` + cameraInfo.cameraInfos[0].viewUrl + ` type='application/x-mpegURL'></video></div>`
        $("#playvideo").html(cc);
        //设置资源路径
        videojs.addLanguage("zh-CN", {
          Play: "播放",
          Pause: "暂停",
          "Current Time": "当前时间",
          Duration: "时长",
          "Remaining Time": "剩余时间",
          "Stream Type": "媒体流类型",
          LIVE: "直播",
          Loaded: "加载完毕",
          Progress: "进度",
          Fullscreen: "全屏",
          "Non-Fullscreen": "退出全屏",
          Mute: "静音",
          Unmute: "取消静音",
          "Playback Rate": "播放速度",
          Subtitles: "字幕",
          "subtitles off": "关闭字幕",
          Captions: "内嵌字幕",
          "captions off": "关闭内嵌字幕",
          Chapters: "节目段落",
          "Close Modal Dialog": "关闭弹窗",
          Descriptions: "描述",
          "descriptions off": "关闭描述",
          "Audio Track": "音轨",
          "You aborted the media playback": "视频播放被终止",
          "A network error caused the media download to fail part-way.":
            "网络错误导致视频下载中途失败。",
          "The media could not be loaded, either because the server or network failed or because the format is not supported.":
            "视频因格式不支持或者服务器或网络的问题无法加载。",
          "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.":
            "由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。",
          "No compatible source was found for this media.":
            "无法找到此视频兼容的源。",
          "The media is encrypted and we do not have the keys to decrypt it.":
            "视频已加密，无法解密。",
          "Play Video": "播放视频",
          Close: "关闭",
          "Modal Window": "弹窗",
          "This is a modal window": "这是一个弹窗",
          "This modal can be closed by pressing the Escape key or activating the close button.":
            "可以按ESC按键或启用关闭按钮来关闭此弹窗。",
          ", opens captions settings dialog": ", 开启标题设置弹窗",
          ", opens subtitles settings dialog": ", 开启字幕设置弹窗",
          ", opens descriptions settings dialog": ", 开启描述设置弹窗",
          ", selected": ", 选择",
          "captions settings": "字幕设定",
          "Audio Player": "音频播放器",
          "Video Player": "视频播放器",
          Replay: "重播",
          "Progress Bar": "进度小节",
          "Volume Level": "音量",
          "subtitles settings": "字幕设定",
          "descriptions settings": "描述设定",
          Text: "文字",
          White: "白",
          Black: "黑",
          Red: "红",
          Green: "绿",
          Blue: "蓝",
          Yellow: "黄",
          Magenta: "紫红",
          Cyan: "青",
          Background: "背景",
          Window: "视窗",
          Transparent: "透明",
          "Semi-Transparent": "半透明",
          Opaque: "不透明",
          "Font Size": "字体尺寸",
          "Text Edge Style": "字体边缘样式",
          None: "无",
          Raised: "浮雕",
          Depressed: "压低",
          Uniform: "均匀",
          Dropshadow: "下阴影",
          "Font Family": "字体库",
          "Proportional Sans-Serif": "比例无细体",
          "Monospace Sans-Serif": "单间隔无细体",
          "Proportional Serif": "比例细体",
          "Monospace Serif": "单间隔细体",
          Casual: "舒适",
          Script: "手写体",
          "Small Caps": "小型大写字体",
          Reset: "重启",
          "restore all settings to the default values": "恢复全部设定至预设值",
          Done: "完成",
          "Caption Settings Dialog": "字幕设定视窗",
          "Beginning of dialog window. Escape will cancel and close the window.":
            "开始对话视窗。离开会取消及关闭视窗",
          "End of dialog window.": "结束对话视窗"
        })
        var myPlayer = videojs("myvideo");
        console.log(myPlayer)
        videojs("myvideo").ready(function () {
          var myPlay = this;
          myPlay.play();
          videotao.push(this)
          this.on("error", function () {
            console.log("加载错误")
            $("#toast").css("display", "block")
            setTimeout(() => {
              $("#toast").css("display", "none")
            }, 5000);
          });
        });
      } else {
        $("#playvideo").html("<div>该区域摄像头状态关闭</div>");
      }
    }
  } else {
    console.log("cameraInfo判断错误")
    console.log(cameraInfo)
  }


}

export function munclosepop() {
  //清除关闭摄像头
  $("div.pop.animated").css("display", "none");
  if (videotao.length != 0) {
    // videotao.dispose()
    for (let i = 0; i < videotao.length; i++) {
      videotao[i].dispose()
    }
    videotao = []
  }



  $("#playWind").html("<div></div>")
  $("#playvideo").html("<div></div>")


}