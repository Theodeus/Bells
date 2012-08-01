THREE.OrbitControls2 = function ( object ) {

    var scope = this;

    var phi = Math.PI / 2, theta = 0;
    var EPS = 0.000001;
    var mouse = new THREE.Vector2();

    this.phiMin = 0;
    this.phiMax = Math.PI;

    this.thetaMin = - Infinity;
    this.thetaMax = Infinity;

    this.scaleX = 1;
    this.scaleY = 1;
    this.scaleZ = 1;

    this.speed = 1;

    this.radius = 200;
    this.center = new THREE.Vector3();

    this.update = function () {

        phi += mouse.y * Math.PI / 180;
        theta += mouse.x  * Math.PI / 180;

        phi = Math.max( scope.phiMin + EPS, Math.min( scope.phiMax - EPS, phi ) );
        theta = Math.max( scope.thetaMin, Math.min( scope.thetaMax, theta ) );

        object.position.x = scope.radius * Math.sin( phi ) * Math.sin( theta ) * scope.scaleX;
        object.position.y = scope.radius * Math.cos( phi ) * scope.scaleY;
        object.position.z = scope.radius * Math.sin( phi ) * Math.cos( theta ) * scope.scaleZ;

        object.lookAt( scope.center );

    };

    var onDocumentMouseMove = function ( event ) {

        mouse.x = ( ( event.clientX / window.innerWidth ) - 0.5 ) * scope.speed;
        mouse.y = ( ( event.clientY / window.innerHeight ) - 0.5 ) * scope.speed;

    };

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    document.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );

};
