var hiragana = [
	{en:'n',  jp:'ん'},
	{en:'wa', jp:'わ'},
	{en:'wo', jp:'を'},
	{en:'ra', jp:'ら'},
	{en:'ri', jp:'り'},
	{en:'ru', jp:'る'},
	{en:'re', jp:'れ'},
	{en:'ro', jp:'ろ'},
	{en:'ya', jp:'や'},
	{en:'yu', jp:'ゆ'},
	{en:'yo', jp:'よ'},
	{en:'ma', jp:'ま'},
	{en:'mi', jp:'み'},
	{en:'mu', jp:'む'},
	{en:'me', jp:'め'},
	{en:'mo', jp:'も'},
	{en:'ha', jp:'は'},
	{en:'hi', jp:'ひ'},
	{en:'fu', jp:'ふ'},
	{en:'he', jp:'へ'},
	{en:'ho', jp:'ほ'},
	{en:'na', jp:'な'},
	{en:'ni', jp:'に'},
	{en:'nu', jp:'ぬ'},
	{en:'ne', jp:'ね'},
	{en:'no', jp:'の'},
	{en:'ta', jp:'た'},
	{en:'chi', jp:'ち'},
	{en:'tsu', jp:'つ'},
	{en:'te', jp:'て'},
	{en:'to', jp:'と'},
	{en:'sa', jp:'さ'},
	{en:'shi', jp:'し'},
	{en:'su', jp:'す'},
	{en:'se', jp:'せ'},
	{en:'so', jp:'そ'},
	{en:'ka', jp:'か'},
	{en:'ki', jp:'き'},
	{en:'ku', jp:'く'},
	{en:'ke', jp:'け'},
	{en:'ko', jp:'こ'},
	{en: 'a', jp:'あ'},
	{en: 'a', jp:'い'},
	{en: 'a', jp:'う'},
	{en: 'a', jp:'え'},
	{en: 'a', jp:'お'}
]
var hiraganaDakuten = [
	{en:'ba',  jp:'ば'},
	{en:'bi',  jp:'び'},
	{en:'bu',  jp:'ぶ'},
	{en:'be',  jp:'べ'},
	{en:'bo',  jp:'ぼ'},
	{en:'pa',  jp:'ぱ'},
	{en:'pi',  jp:'ぴ'},
	{en:'pu',  jp:'ぷ'},
	{en:'pe',  jp:'ぺ'},
	{en:'po',  jp:'ぽ'},
	{en:'da',  jp:'だ'},
	{en:'di',  jp:'ぢ'},
	{en:'du',  jp:'づ'},
	{en:'de',  jp:'で'},
	{en:'do',  jp:'ど'},
	{en:'za',  jp:'ざ'},
	{en:'ji',  jp:'じ'},
	{en:'zu',  jp:'ず'},
	{en:'ze',  jp:'ぜ'},
	{en:'zo',  jp:'ぞ'},
	{en:'ga',  jp:'が'},
	{en:'gi',  jp:'ぎ'},
	{en:'gu',  jp:'ぐ'},
	{en:'ge',  jp:'げ'},
	{en:'go',  jp:'ご'},
]
var katakana = [
	{en:'n',  jp:'ン'},
	{en:'wa', jp:'ワ'},
	{en:'wo', jp:'ヲ'},
	{en:'ra', jp:'ラ'},
	{en:'ri', jp:'リ'},
	{en:'ru', jp:'ル'},
	{en:'re', jp:'レ'},
	{en:'ro', jp:'ロ'},
	{en:'ya', jp:'ヤ'},
	{en:'yu', jp:'ユ'},
	{en:'yo', jp:'ヨ'},
	{en:'ma', jp:'マ'},
	{en:'mi', jp:'ミ'},
	{en:'mu', jp:'ム'},
	{en:'me', jp:'メ'},
	{en:'mo', jp:'モ'},
	{en:'ha', jp:'ハ'},
	{en:'hi', jp:'ヒ'},
	{en:'fu', jp:'フ'},
	{en:'he', jp:'ヘ'},
	{en:'ho', jp:'ホ'},
	{en:'na', jp:'ナ'},
	{en:'ni', jp:'ニ'},
	{en:'nu', jp:'ヌ'},
	{en:'ne', jp:'ネ'},
	{en:'no', jp:'ノ'},
	{en:'ta', jp:'タ'},
	{en:'chi', jp:'チ'},
	{en:'tsu', jp:'ツ'},
	{en:'te', jp:'テ'},
	{en:'to', jp:'ト'},
	{en:'sa', jp:'サ'},
	{en:'shi', jp:'シ'},
	{en:'su', jp:'ス'},
	{en:'se', jp:'セ'},
	{en:'so', jp:'ソ'},
	{en:'ka', jp:'カ'},
	{en:'ki', jp:'キ'},
	{en:'ku', jp:'ク'},
	{en:'ke', jp:'ケ'},
	{en:'ko', jp:'コ'},
	{en: 'a', jp:'ア'},
	{en: 'a', jp:'イ'},
	{en: 'a', jp:'ウ'},
	{en: 'a', jp:'エ'},
	{en: 'a', jp:'オ'}
]
var katakanaDakuten = [
	{en:'ba',  jp:'バ'},
	{en:'bi',  jp:'ビ'},
	{en:'bu',  jp:'ブ'},
	{en:'be',  jp:'ベ'},
	{en:'bo',  jp:'ボ'},
	{en:'pa',  jp:'パ'},
	{en:'pi',  jp:'ピ'},
	{en:'pu',  jp:'プ'},
	{en:'pe',  jp:'ペ'},
	{en:'po',  jp:'ポ'},
	{en:'da',  jp:'ダ'},
	{en:'di',  jp:'ヂ'},
	{en:'du',  jp:'ヅ'},
	{en:'de',  jp:'デ'},
	{en:'do',  jp:'ド'},
	{en:'za',  jp:'ザ'},
	{en:'ji',  jp:'ジ'},
	{en:'zu',  jp:'ズ'},
	{en:'ze',  jp:'ゼ'},
	{en:'zo',  jp:'ゾ'},
	{en:'ga',  jp:'ガ'},
	{en:'gi',  jp:'ギ'},
	{en:'gu',  jp:'グ'},
	{en:'ge',  jp:'ゲ'},
	{en:'go',  jp:'ゴ'}
]

var difficulties = {
	1 : {
		name:'Hiragana',
		charSets:[hiragana],
		len:hiragana.length
	},
	2 : {
		name:'Hiragana & Dakuten',
		charSets:[hiragana, hiraganaDakuten],
		len:[...hiragana, ...hiraganaDakuten].length
	},
	3 : {
		name:'Katakana',
		charSets:[katakana],
		len:katakana.length
	},
	4 : {
		name:'Katakana & Dakuten',
		charSets:[katakana, katakanaDakuten],
		len:[...katakana, ...katakanaDakuten].length
	},
	5 : {
		name: 'Hiragana & Katakana',
		charSets:[katakana,hiragana,katakanaDakuten,hiraganaDakuten],
		len: [...katakana,...hiragana,...katakanaDakuten,...hiraganaDakuten].length
	}
}

var prevQuestions = [];
var questions = [];
var Game = {
	start : function(){
		$('.onStart-hide').fadeOut();
		$('.onStart-show').fadeIn();
		questions = getCharSets(difficulties[parseInt($('.difficulty').attr('data-diff'))].charSets);
		let charIndex = getNum(0,questions.length-1);
		$('.character').html(questions[charIndex].jp);
	},
	populateOptions : function(ra){
		
	}
}

function getCharSets(sets){ //this should be an array
	return !Array.isArray(sets) ? console.warn('Please pass an array') : sets.length > 1 ? [].concat.apply([],sets) : sets[0];
}
function getNum(min,max){
	return Math.floor(Math.random() * (max - min + 1) + min)
}
function updateDiffBtnStr(d){
	$('.difficulty').find('.difficultyLabel').html(`${difficulties[d].name}: ${difficulties[d].len} Characters`);
}
$(document).ready(function(){
	updateDiffBtnStr(1);
	// $('.character').html(hiragana[getNum(0,hiragana.length-1)].jp)
})
$(document).on('click','.difficulty',function(){
	let diff = parseInt($(this).attr('data-diff'));
	diff = diff > Object.keys(difficulties).length-1 ? 1 : diff+1;
	console.log(diff);
	$(this).attr('data-diff',diff.toString())
	updateDiffBtnStr(diff);
})
$(document).on('click','.startGame',function(){
	Game.start();
})
