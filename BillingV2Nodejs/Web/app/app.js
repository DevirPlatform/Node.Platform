var billingApplication = angular.module('billingApplication', ['indexedDB', "highcharts-ng", 'commonModule', 'ngRoute', 'i18nModule', 'ngCookies', 'angularify.semantic.checkbox', 'ui.grid', 'ngAnimate', 'toastr', 'ui.date', 'angularify.semantic.dropdown', 'angularify.semantic.modal'])
    .config(['$routeProvider', function (routeProvider) {
        routeProvider
            .otherwise({
                redirectTo: '/main'
            })
            .when("/main", {
                templateUrl: "./app/admin/main/mainView.html"
            })
            .when("/administration/translate", {
                templateUrl: "./app/admin/translate/translateView.html"
            })
            .when("/administration/languages", {
                templateUrl: "./app/admin/languages/languagesView.html"
            })
            .when("/reports/report1", {
                templateUrl: "./app/admin/reports/report1View.html"
            })
            .when("/reports/report2", {
                templateUrl: "./app/admin/reports/report2View.html"
            })

            .when("/login", {
                templateUrl: "./app/login/login.html"
            })
            .when("/loginNormal", {
                templateUrl: "./app/login/loginNormal.html"
            })
            .when("/controller/main", {
                templateUrl: "./app/controller/main.html"
            })
            .when("/controller/sub:id", {
                templateUrl: "./app/controller/sub.html"
            })
            .when('/operator/juridical', {
                templateUrl: './app/operator/juridical/juridicalView.html'
            })
            .when('/operator/juridical/paymentsByPeriod', {
                templateUrl: './app/operator/juridical/paymentsByPeriodView.html'
            })
            .when('/operator/fizical', {
                templateUrl: './app/operator/fizical/fizicalView.html'
            })
            .when('/operator/fizical/paymentsByPeriod', {
                templateUrl: './app/operator/fizical/paymentsByPeriodView.html'
            })
        ;
    }]).config(['$translatePartialLoaderProvider', function (translatePartialLoader) {
        translatePartialLoader.addPart('identity');
    }]).config(function ($indexedDBProvider) {
        $indexedDBProvider
            .connection('myObjectStore')
            .upgradeDatabase(1, function (event, db, tx) {
                var userStore = db.createObjectStore('user', {keyPath: '_id'});

                var objStore = db.createObjectStore('objects', {keyPath: '_id'});
                objStore.createIndex('name_idx', 'name', {unique: false});
                objStore.createIndex('bin_idx', 'bin', {unique: false});
                objStore.createIndex('address_idx', 'address', {unique: false});
            }).upgradeDatabase(2, function (event, db, tx) {
                db.deleteObjectStore("objects");
                var objStore = db.createObjectStore('objects', {keyPath: '_id'});
                objStore.createIndex('name_idx', 'name', {unique: false});
                objStore.createIndex('bin_idx', 'bin', {unique: false});
                objStore.createIndex('address_idx', 'address', {unique: false});
            });
    });
