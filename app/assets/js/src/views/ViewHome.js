define([
    'ring',
    'dest/views/View'
], function (ring) {
    "use strict";

    var className = 'ViewHome';

    $[className] = ring.create([$.View], {
        constructor: function (el) {
            var self = this;
            self.$super(el);
        },

        //-- Vars
        //--------------------------------------------------------------
        firstName: [
            'Big',
            'Kid',
            'Young',
            'Baby faced',
            'Smooth',
            'King',
            'Lil’',
            'Notorious',
            'Ol’ dirty',
            'Slick',
            'Kool',
            'Biggie',
            'Dr.',
            'Dizzy',
            'Cash Money',
            'Wiz',
            'T-',
            'Nasty',
            'G-',
            'Wavy'
        ],

        lastName: [
            'Chemistry',
            'Math',
            'Algebra',
            'Calculus',
            'Trig',
            'Bio',
            'Physics',
            'Science',
            'DNA',
            'Element',
            'Nucleus',
            'Photon',
            'Photo-synthesis',
            'Molecule',
            'Isotope',
            'Friction',
            'Fission',
            'Magnesium',
            'Atom',
            'Biosynthesis'
        ],
        error: null,

        //-- Init
        //--------------------------------------------------------------
        initHook: function () {
            var self = this;
            self.$super();
            self.bindEventsHook();
        },

        //-- Functions
        //--------------------------------------------------------------
        bindEventsHook: function () {
            var self = this;

            self.el.find('button').on('click', function () {
                self.generateName();
            });

            $('body').on('keypress', function(e) {
                if (e.keyCode == 13) {
                    self.el.find('button').trigger('click');
                }
            });
        },

        splitInputName: function () {
            var self = this;
            var inputVal = self.el.find('input').val();
            var name = inputVal.split(' ');

            self.error = null;

            if (!inputVal || name.length < 2) {
                console.log('error');
                self.error = 'You need to write your first name and last name';
            }


            console.log(name);
        },

        generateName: function() {
            var self = this;

            self.splitInputName();

            var newName = 'Bobby Bob Boucher';

            if (self.error) {
                self.el.find('.result').text('');
                self.el.find('.error').text(self.error);
            } else {
                self.el.find('.result').text(newName);
                self.el.find('.error').text('');
            }

            //var firstNm = document.getElementById("fName").value.toUpperCase();
            //var middleNm = document.getElementById("mName").value.toUpperCase();
            //var lastNm = document.getElementById("lName").value.toUpperCase();
            //var validName = true;
            //
            //if (firstNm == "") {
            //    validName = false;
            //}
            //else {
            //    var firstNum = firstNm.charCodeAt(0) - 65;
            //
            //    if (firstNum < 0 || firstNum > 25) {
            //        validName = false;
            //    }
            //}
            //
            //if (!validName) {
            //    document.getElementById("fName").focus();
            //    document.getElementById("fName").select();
            //    return "That's not a valid first name";
            //}
            //if (middleNm == "") {
            //    validName = false;
            //}
            //else {
            //    var middleNum = middleNm.charCodeAt(0) - 65;
            //
            //    if (middleNum < 0 || middleNum > 25) {
            //        validName = false;
            //    }
            //}
            //if (!validName) {
            //    document.getElementById("mName").focus();
            //    document.getElementById("mName").select();
            //    return "That's not a valid middle name";
            //}
            //
            //if (lastNm == "") {
            //    validName = false;
            //}
            //else {
            //    var lastNum1 = lastNm.charCodeAt(0) - 65;
            //    var lastNum2 = lastNm.charCodeAt((lastNm.length-1)) - 65;
            //
            //    if (lastNum1 < 0 || lastNum1 > 25 || lastNum2 < 0 || lastNum2 > 25) {
            //        validName = false;
            //    }
            //}
            //
            //if (!validName) {
            //    document.getElementById("lName").focus();
            //    document.getElementById("lName").select();
            //    return "That's not a valid last name";
            //}
            //
            //console.log(firstNum, middleNum, lastNum1, lastNum2);
            //console.log(firstName[firstNum]
            //    , middleName[middleNum] , lastName1[lastNum1]
            //    ,  lastName2[lastNum2])
            //
            //return "Your silly name is " + firstName[firstNum]
            //    + " " +  middleName[middleNum] + " " + lastName1[lastNum1] + ' '
            //    + lastName2[lastNum2];
        }
    });

    return $[className];
});