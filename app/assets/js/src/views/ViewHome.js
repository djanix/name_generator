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
        firstNameArray: [
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

        lastNameArray: [
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

        alphabet: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','','y','z'],
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

            self.el.find('.share-facebook').on('click', function () {
                ga('send', 'event', 'Click', 'Sharing', 'Sharing via facebook');
            });

            self.el.find('.share-twitter').on('click', function () {
                ga('send', 'event', 'Click', 'Sharing', 'Sharing via twitter');
            });
        },

        generateName: function() {
            var self = this;
            var nameArray = self.splitInputName();

            if (self.error) {
                self.el.find('.result').text('');
                self.el.find('.error').text(self.error);
                ga('send', 'event', 'Click', 'Generate Name', 'Name given is invalid');
                return;
            }

            ga('send', 'event', 'Click', 'Generate Name', 'Generating a new random nickname');

            var firstNameScore = self.convertInputNameToNumber(nameArray[0]);
            var lastNameScore = self.convertInputNameToNumber(nameArray[1]);

            var firstNameGenerated = self.convertNumberToGeneratedName(firstNameScore, self.firstNameArray);
            var lastNameGenerated = self.convertNumberToGeneratedName(lastNameScore, self.lastNameArray);

            self.el.find('.result').text(firstNameGenerated + ' ' + lastNameGenerated);
            self.el.find('.error').text('');
        },

        splitInputName: function () {
            var self = this;
            var inputVal = self.el.find('input').val().toLowerCase();
            var name = inputVal.split(' ');

            self.error = null;

            if (!inputVal || name.length < 2) {
                self.error = 'You need to write your first name and last name';
            }

            return name;
        },

        convertInputNameToNumber: function (name) {
            var self = this;
            var number = name.length;

            for (var i = 0, len = name.length; i < len; i++) {
                number += _.indexOf(self.alphabet, name.substring(i, i + 1)) + 1;
            }

            return number;
        },

        convertNumberToGeneratedName: function (number, array) {
            var position = number % array.length;
            return (array[position]);
        }
    });

    return $[className];
});