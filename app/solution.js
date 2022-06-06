function inputoption3(e) {
    var arrays = ['', 'Min Steps In Infinite Grid', 'Add One To Number', 'Max Sum Contiguous Subarray',
        'Maximum Absolute Difference', 'Repeat and Missing Number Array',
        'Flip', 'Max Non Negative SubArray', 'Spiral Order Matrix II',
        'Pascal Triangle', 'Kth Row of Pascals Triangle', 'Anti Diagonals',
        'Noble Integer', 'Largest Number', 'Wave Array', 'Hotel Bookings Possible',
        'Max Distance', 'Maximum Unsorted Subarray', 'Rotate Matrix', 'Next Permutation',
        'Find Permutation', 'Merge Intervals', 'Set Matrix Zeros', 'First Missing Integer',
        'Repeat and Missing Number Array'];

    var math = ['', 'Prime Sum', 'Sum of pairwise Hamming Distance', 'FizzBuzz', 'Power Of Two Integers',
        'Excel Column Number', 'Excel Column Title', 'Points inside Rectangle', 'Palindrome Integer',
        'Reverse integer', 'Greatest Common Divisor', 'Trailing Zeros in Factorial',
        'Sorted Permutation Rank', 'Largest Coprime Divisor', 'Sorted Permutation Rank with Repeats',
        'Rearrange Array', 'Grid Unique Paths'];

    var binarysearch = ['', 'Matrix Median', 'Square Root of Integer', 'Allocate Books', 'Matrix Search',
        'Search for a Range', 'Sorted Insert Position', 'Implement Power Function',
        'Rotated Sorted Array Search'];

    var strings = ['', 'Palindrome String', 'Longest Common Prefix', 'Count And Say', 'Minimum Characters String Palindromic',
        'Longest Palindromic Substring', 'Implement StrStr', 'Compare Version Numbers',
        'Atoi', 'Valid Number', 'Valid Ip Addresses', 'Length of Last Word', 'Reverse the String',
        'Roman To Integer', 'Integer To Roman', 'Add Binary Strings', 'Power of 2', 'Multiply Strings',
        'Justified Text', 'Zigzag String'];

    var bitmanipulation = ['',];
    var twopointers = ['',];
    var linkedlists = ['',];
    var stacksandqueues = ['',];
    var backtracking = ['',];
    var hashing = ['',];
    var heapsandmaps = ['',];
    var trees = ['',];
    var dynamicprogramming = ['',];
    var greedy = ['',];
    var graphs = ['',];
    var codeninja = ['',];

    $('#sol-input3')[0].options.length = 0;
    switch (e.value) {
        case 'arrays':
            for (let i of arrays) {
                $('#sol-input3').append(`
                    <option>${i}</option>
                `)
            }
            break;
        case 'math':
            for (let i of math) {
                $('#sol-input3').append(`
                        <option>${i}</option>
                    `)
            }
            break;
        case 'binarysearch':
            for (let i of binarysearch) {
                $('#sol-input3').append(`
                    <option>${i}</option>
                `)
            }
            break;
        case 'strings':
            for (let i of strings) {
                $('#sol-input3').append(`
                    <option>${i}</option>
                `)
            }
            break;
        case 'bitmanipulation':
            for (let i of bitmanipulation) {
                $('#sol-input3').append(`
                    <option>${i}</option>
                `)
            }
            break;
        case 'twopointers':
            for (let i of twopointers) {
                $('#sol-input3').append(`
                    <option>${i}</option>
                `)
            }
            break;
        default:
            for (let i of twopointers) {
                $('#sol-input3').append(`
                    <option>${i}</option>
                `)
            }
            break;
    }
}

$('#sol-submit').click(() => {
    let formid = $('#form-id1')
    formid.css("opacity", "0")
    formid.css("height", "0")
    formid.css("z-index", "-100")
    let iframeid = $('#iframe')
    iframeid.css("z-index", "1000")
    iframeid.css("opacity", "100")
    iframeid.css("overflow", "scroll")
    iframeid.css("height", "60vh")
    iframeid.css("width", "100%")
    let btnback = $('#back')
    btnback.css("width", "60px")
    btnback.css("height", "40px")
    btnback.css("opacity", "100")
    let id = $('#sol-input1').val()
    let codeid
    if (id == 'Questions') {
        console.log("bana nahi abhi")
    }
    else {
        codeid = getcodeid2($('#sol-input2').val(), $('#sol-input3').val())
        console.log(codeid)
    }
    $('#iframe').attr("src",`data:text/html;charset=utf-8,
        <base target='_blank' /></head >
    <body><script src='https://gist.github.com/${codeid}.js'></script>
    </body>`)
})

$('#back').click(() => {
    let formid = $('#form-id1')
    formid.css("opacity", "100")
    formid.css("height", "70vh")
    formid.css("z-index", "100")
    let iframeid = $('#iframe')
    iframeid.css("z-index", "-100")
    iframeid.css("opacity", "0")
    iframeid.css("overflow", "scroll")
    iframeid.css("height", "0px")
    iframeid.css("width", "0px")
    let btnback = $('#back')
    btnback.css("width", "0px")
    btnback.css("height", "0px")
    btnback.css("opacity", "0")
})

function getcodeid2(input1, input2) {
    switch (input1) {
        case 'arrays':
            switch (input2) {
                case 'Min Steps In Infinite Grid': return 'cc839c9b76d58925f00fd201cc3211bc';
                case 'Add One To Number': return '0f2d6b86c23740861ba0d6784d84fa18';
                case 'Max Sum Contiguous Subarray': return 'df2007297dae8c14ab40519314d81cbe';
                case 'Maximum Absolute Difference': return 'eca4e805309b8c747fc92cc4e4deca63';
                case 'Repeat and Missing Number Array': return '151cee6fe8c537e56593d751603086ab';
                case 'Flip': return '27f11e859573539d39bd6ace451c0469';
                case 'Max Non Negative SubArray': return 'ca2ea04dc9baf84fed4a42787734740e';
                case 'Spiral Order Matrix II': return '6b0d076184d1fc687f3dec6caa4a8095';
                case 'Pascal Triangle': return '926f057ac283899a6dc4aa6c5fa89778';
                case 'Kth Row of Pascals Triangle': return '37ed3360d746ea58ad7a1a369319b293';
                case 'Anti Diagonals': return '52586bed731f37b24149ee64df31ab58';
                case 'Noble Integer': return 'ecf7818b3c6fdb6ad17370133d526423';
                case 'Largest Number': return '56a224f3bddd98311208325108c938e6';
                case 'Wave Array': return 'bb0e1d18e8b16179467837961dbeaa55';
                case 'Hotel Bookings Possible': return 'aa828314af2287a60ae04ad7773fea87';
                case 'Max Distance': return '5ffb9885b74b8f10ad66b0b56ad695c3';
                case 'Maximum Unsorted Subarray': return '17b42315593216a78cceb62c160e89d0';
                case 'Rotate Matrix': return '6edc71a2471cbe39f2bb84f9d315c954';
                case 'Next Permutation': return 'fbac1a6c36bd02f580b7866b2fa13142';
                case 'Find Permutation': return '628c09e0b1213bca24996231029e930b';
                case 'Merge Intervals': return '49826abbc75cd8a09207dedcb7b3a1d2';
                case 'Set Matrix Zeros': return 'dabb616a4c0b729148691621e5517289';
                case 'First Missing Integer': return '08fa5c2747f49d0a955b5648e4bf3bbc';
                case 'Repeat and Missing Number Array': return '16da67bab45e218c1f6b42e8bb983703';
            }
            break;
        case 'math':
            switch (input2) {
                case 'Prime Sum': return 'b5ad5c9aaab54b6f082b8e545c876cbd';
                case 'Sum of pairwise Hamming Distance': return '997be287d9c4653bf69cd2f3926ef437';
                case 'FizzBuzz': return 'b036fa45b59e174cf50c829a21b7f4cc';
                case 'Power Of Two Integers': return '066554004a132b8bad429a14f0f47454';
                case 'Excel Column Number': return 'c2afacac223840a73c30ee77579ff3fd';
                case 'Excel Column Title': return '7932ccb7ad1b5e6b18db46aaea9f3002';
                case 'Points inside Rectangle': return '7b6c87c373b26ae140b61aab69b89181';
                case 'Palindrome Integer': return '276720ff38f588cc650f89c71ad84655';
                case 'Reverse integer': return 'f63d03116ec5ae4bd91bfac97ac1c336';
                case 'Greatest Common Divisor': return 'b733b64ab683066941458f373437c7f4';
                case 'Trailing Zeros in Factorial': return '91a4f15d30a4c8a820883cb39434a242';
                case 'Sorted Permutation Rank': return '99e7e4cef7f3c343acd54cd24260a861';
                case 'Largest Coprime Divisor': return '4480108651cacc9fac06ff288cb3773c';
                case 'Sorted Permutation Rank with Repeats': return '63f7939e9591ff0643daefd73e160551';
                case 'Rearrange Array': return '874a985d4a6bd48c34dcc55bc1f7e650';
                case 'Grid Unique Paths': return '884d9ccfe9cef27a4ff30f82c6ce9fab';
            }
            break;
        case 'binarysearch':
            switch (input2) {
                case 'Matrix Median': return 'f1fdb1c16d510077d95ed7b8dccb92cf';
                case 'Square Root of Integer': return 'e00de83baecc9a22da0316fabbf45280';
                case 'Allocate Books': return '5360c0cef9831bc8bb784a33750626df';
                case 'Matrix Search': return 'fc162b07ac62b7689883e20e1d09747d';
                case 'Search for a Range': return '7af7f9282773dc2f5156b4a40edbe811';
                case 'Sorted Insert Position': return '96558708a5b0f0200e09016946cda8a5';
                case 'Implement Power Function': return 'fbb7a57d4bc333f585c76d91172750be';
                case 'Rotated Sorted Array Search': return '6952e7a2de9f091aeeb2f03b950f4921';
            }
            break;
        case 'strings':
            switch (input2) {
                case 'Palindrome String': return '9d62a1e8579993469fd842598adc4d67';
                case 'Longest Common Prefix': return '0b0ebac391d7a418e1e793e6946f9fff';
                case 'Count And Say': return 'c7b5918f477aa05394c6783c722e0198';
                case 'Minimum Characters String Palindromic': return '648168af3df571ea36de884896ca0f47';
                case 'Longest Palindromic Substring': return 'dfb538ce84eded280e6db5a2c50c3d0e';
                case 'Implement StrStr': return '8b3c42df4707d89ae9f8e519acd25821';
                case 'Compare Version Numbers': return '663be492445535a13f01a74896ea91ff';
                case 'Atoi': return '4d980f1af7290972302b151cc736345d';
                case 'Valid Number': return '22adb50010d1b0884f2b1809cb438f42';
                case 'Valid Ip Addresses': return '7d368fd85bf522445f8b34d905c73aae';
                case 'Length of Last Word': return '61889d86dcafebff12ec65c31adc17ee';
                case 'Reverse the String': return '5aef56ff127ea90091bc7aa85298e9a8';
                case 'Roman To Integer': return 'e2fca66143aa1ffbe1662c8aad2748ff';
                case 'Integer To Roman': return '1e647e977557adf862fd0d61533d33e2';
                case 'Add Binary Strings': return 'de671f3fb7068c2439d8551b6eb119cc';
                case 'Power of 2': return '2fa769b155160f1f70e789eac633af52';
                case 'Multiply Strings': return '4f26a6cad6a75532e8fa4d34249b19f9';
                case 'Justified Text': return 'eb1f7899f58170f27ab4ca6aa102529a';
                case 'Zigzag String': return '4fd79833756951596e7925c9fdf48e51';
            }
            break;
        case 'bitmanipulation':
            switch (input2) {

            }
            break;
        case 'twopointers':
            switch (input2) {

            }
            break;
        case 'linkedlists':
            switch (input2) {

            }
            break;
        case 'stacksandqueues':
            switch (input2) {

            }
            break;
        case 'backtracking':
            switch (input2) {

            }
            break;
        case 'hashing':
            switch (input2) {

            }
            break;
        case 'heapsandmaps':
            switch (input2) {

            }
            break;
        case 'trees':
            switch (input2) {

            }
            break;
        case 'dynamicprogramming':
            switch (input2) {

            }
            break;
        case 'greedy':
            switch (input2) {

            }
            break;
        case 'graphs':
            switch (input2) {

            }
            break;
        case 'codeninja':
            switch (input2) {

            }
            break;
        default:
            return '';
    }
}
