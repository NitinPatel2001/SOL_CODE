function inputoption3(e) {
    var arrays = ['', 'Min Steps In Infinite Grid', 'Add One To Number', 'Max Sum Contiguous Subarray',
        'Maximum Absolute Difference', 'Repeat and Missing Number Array',
        'Flip', 'Pick From Both Side', 'Spiral Order Matrix II',
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

    var strings = ['', 'Palindrome String', 'Longest Common Prefix', 'Count And Say', 'Minimum Characters required to make a String Palindromic',
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
                case 'Min Steps In Infinite Grid': return 'b391bb7989296305b3145fe75242df10';
                case 'Add One To Number': return '683500ea5f0ef5f1d360632825023f92';
                case 'Max Sum Contiguous Subarray': return '0b0144c95f960209ae415dd9a030ed9d';
                case 'Maximum Absolute Difference': return '1765d404d7752b70ae2b7b923fb2ca10';
                case 'Repeat and Missing Number Array': return 'e1017086b8d25d3cdb5ec24e064ecc66';
                case 'Flip': return '2f5a29bceaa5b8aaf2192441d475ce9e';
                case 'Pick From Both Side': return '9593946fc1d5ca8567845290bdd92115';
                case 'Spiral Order Matrix II': return '663f5bbf673b7e4ec75a20565fab4d1d';
                case 'Pascal Triangle': return '5dc1b16558c159481f6a44770a286ab8';
                case 'Kth Row of Pascals Triangle': return 'bea11c93354e7aebbeede291e98c18e2';
                case 'Anti Diagonals': return '1c1634ce75ceb90b6297bcbab4d74316';
                case 'Noble Integer': return '19617e36f76a8b068645e7f176b70974';
                case 'Largest Number': return '84bb2981a331da3bf6fbd988d301a6a8';
                case 'Wave Array': return 'e1c182fefac7236b0a96f137bb8c44f3';
                case 'Hotel Bookings Possible': return '09d6e984d86a2fa1543115ad6c69ea56';
                case 'Max Distance': return '0b6faf0aca6efc12b940f9a0fafa0f39';
                case 'Maximum Unsorted Subarray': return '67da566f2ce3157b4988fa83e23625cb';
                case 'Rotate Matrix': return '2f6b80217e130aa88df3ac92cb6c9a2e';
                case 'Next Permutation': return '36be5f67b9970189a4d5451fd484c3e5';
                case 'Find Permutation': return '5c99bec9316bd5178fcd7fe4da49058a';
                case 'Merge Intervals': return 'c9f48f278b8fdd4dba8f4a6a513d7575';
                case 'Set Matrix Zeros': return '8712243f94747ddd5c5b1112c69fee22';
                case 'First Missing Integer': return '27ea60b5589713598c4b62a81c891f23';
                case 'Repeat and Missing Number Array': return 'e42e447371c3175c7ef8caf8c49df595';
            }
            break;
        case 'math':
            switch (input2) {
                case 'Prime Sum': return 'c2d01d635016f702f109d780016f6ac2';
                case 'Sum of pairwise Hamming Distance': return 'af8db68e34c2201f655d8df49e14381f';
                case 'FizzBuzz': return '9df95dccb5facebfdd4dd986226655d0';
                case 'Power Of Two Integers': return '0bc6134bb88c479603ff451fa877ec27';
                case 'Excel Column Number': return '8a376c9c8f8fda8e4cf2839e71b0a5cb';
                case 'Excel Column Title': return 'bd91844c478856dc7ba59b6b038c7445';
                case 'Step By Step': return '1c5fd0729f2a64390fb85268b6d729af';
                case 'Palindrome Integer': return '8e0d0fde39da544534d2c528f5fbd680';
                case 'Reverse integer': return 'a353904df6eb0da5f6bfff3f2073130e';
                case 'Greatest Common Divisor': return '21c60fd955c2b02cf98dd7cde6dfa67a';
                case 'Trailing Zeros in Factorial': return '65182a1505418ab3a183a0898f01575d';
                case 'Sorted Permutation Rank': return '28e78dc63d044d842d13d3e4b74d00b0';
                case 'Largest Coprime Divisor': return '7de77cfad478e58a61865ef9147b57a6';
                case 'Sorted Permutation Rank with Repeats': return '696a255033d9fd65740942da2c189a42';
                case 'Rearrange Array': return 'fdd94880c234a4e86f33e859666ee44a';
                case 'Grid Unique Paths': return '1789be9f30fbe507e40f949ac8429ece';
            }
            break;
        case 'binarysearch':
            switch (input2) {
                case 'Matrix Median': return 'cd71308c53280691753585a85f02381b';
                case 'Square Root of Integer': return '82c037fe8f396d1340d01e70021bfddb';
                case 'Allocate Books': return 'e5d5acfba5fe39d25ab24b000bd2bf13';
                case 'Matrix Search': return '5aaf49829db10bb1301e557f60ad66b8';
                case 'Search for a Range': return '497e817a5b84ffa1233affb78123b397';
                case 'Sorted Insert Position': return '8b9575218777d10c81d16afa074dfdbb';
                case 'Implement Power Function': return '02295bea713c47e8d4555c3c208e74b4';
                case 'Rotated Sorted Array Search': return '420d6efaeeb705d10b45f977da2502e3';
            }
            break;
        case 'strings':
            switch (input2) {
                case 'Palindrome String': return 'a3f8cf895c83ed8dc95ee91f382d274a';
                case 'Longest Common Prefix': return 'a5693631984c26fc1e254ee057d63c1d';
                case 'Count And Say': return '283e0cb60d1aacfb3fe882c84bbe37c9';
                case 'Minimum Characters required to make a String Palindromic': return '447c8687f0c866ee2064ef12b7efde09';
                case 'Longest Palindromic Substring': return '';
                case 'Implement StrStr': return '';
                case 'Compare Version Numbers': return '';
                case 'Atoi': return '';
                case 'Valid Number': return '';
                case 'Valid Ip Addresses': return '';
                case 'Length of Last Word': return '';
                case 'Reverse the String': return '';
                case 'Roman To Integer': return '';
                case 'Integer To Roman': return '';
                case 'Add Binary Strings': return '';
                case 'Power of 2': return '';
                case 'Multiply Strings': return '';
                case 'Justified Text': return '';
                case 'Zigzag String': return '';
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
