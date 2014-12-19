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
            self.el.find('.step1 input').focus();
        },

        //-- Functions
        //--------------------------------------------------------------
        bindEventsHook: function () {
            var self = this;

            self.el.find('.step1 button').on('click', function () {
                self.generateName();
            });

            self.el.find('.step2 button').on('click', function () {
                self.showStep1();
            });

            $('.step1 input').on('keypress', function(e) {
                if (e.keyCode == 13) {
                    self.el.find('.step1 button').trigger('click');
                }
            });

            self.el.find('.share-facebook').on('click', function () {
                ga('send', 'event', 'Click', 'Sharing', 'Sharing via facebook');
            });

            self.el.find('.share-twitter').on('click', function () {
                ga('send', 'event', 'Click', 'Sharing', 'Sharing via twitter');
            });
        },

        showStep1: function () {
            var self = this;

            self.el.find('.step1').show();
            self.el.find('.step2').hide();

            self.el.find('.error').text('');
            self.el.find('.step1 input').val('').focus();
        },

        showStep2: function (name, generatedName) {
            var self = this;

            self.el.find('.result').text(generatedName);
            self.el.find('.step2 .name').text(name);

            self.el.find('.step1').hide();
            self.el.find('.step2').show();
        },

        showError: function (error) {
            var self = this;

            ga('send', 'event', 'Click', 'Generate Name', 'Name given is invalid');

            self.el.find('.result').text('');
            self.el.find('.error').text(error);
            self.el.find('.step1 input').focus();
        },

        generateName: function() {
            var self = this;
            var inputValue = self.el.find('.step1 input').val();
            var nameArray = self.splitInputName(inputValue);

            if (self.error) {
                return self.showError(self.error);
            }

            ga('send', 'event', 'Click', 'Generate Name', 'Generating a new random nickname');

            var firstNameScore = self.convertInputNameToNumber(nameArray[0]);
            var lastNameScore = self.convertInputNameToNumber(nameArray[1]);

            var firstNameGenerated = self.convertNumberToGeneratedName(firstNameScore, self.firstNameArray);
            var lastNameGenerated = self.convertNumberToGeneratedName(lastNameScore, self.lastNameArray);

            self.showStep2(inputValue, firstNameGenerated + ' ' + lastNameGenerated);
        },

        splitInputName: function (inputVal) {
            var self = this;
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
                number += _.indexOf(self.alphabet, name.toLowerCase().substring(i, i + 1)) + 1;
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