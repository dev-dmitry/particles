const Calc = require('./utils/calc');
const Ease = require('./utils/ease');
const AxisHelper = require('./utils/axis');
let gui = new dat.GUI();
let increase = 0.05;
let counter = 0;
let y;
let meshCircle = new THREE.Object3D();
meshCircle.add( new THREE.Line(
    new THREE.Geometry(),
    new THREE.LineBasicMaterial( {
        color: 0xffffff,
    } )
) );
class Loader {

	constructor(System) {
		this.calc = new Calc();
		this.ease = new Ease();

		this.dom = {
			html: document.documentElement,
			container: document.querySelector('.loader'),
			timescaleWrap: document.querySelector('.timescale-wrap'),
			timescaleRange: document.querySelector('.timescale-range'),
			timescaleValue: document.querySelector('.timescale-value'),
			replayButton: document.querySelector('.replay-animation'),
			debugButton: document.querySelector('.icon--debug')
		};

		this.dom.html.classList.add('loading');

		this.completed = false;
		this.raf = null;

		this.setupDebug();
		this.setupTime();
		this.setupScene();
		this.setupCamera();
		this.setupRenderer();
		this.setupControls();
		this.setupHelpers();
		this.listen();
		this.onResize();

		this.system = new System(this);
		this.loop();
	}

	setupDebug() {
		this.isDebug = location.hash.indexOf('debug') > 0;
		this.isGrid = location.hash.indexOf('grid') > 0;
		this.isOrbit = location.hash.indexOf('orbit') > 0;
		this.debugHash = '';
			this.isGrid = true;
			this.isOrbit = true;
		if(this.debugHash) {
			[].slice.call(document.querySelectorAll('.demo')).forEach((elem, i, arr) => {
				elem.setAttribute('href', `${elem.getAttribute('href')}#${this.debugHash}`);
			});
		}
	}
	setupTime() {
		this.timescale = 1;
		this.clock = new THREE.Clock();
		this.deltaTimeSeconds = this.clock.getDelta() * this.timescale;
		this.deltaTimeMilliseconds = this.deltaTimeSeconds * 1000;
		this.deltaTimeNormal = this.deltaTimeMilliseconds / (1000 / 60);
		this.elapsedMilliseconds = 0;
	}

	setupScene() {
		this.scene = new THREE.Scene();
/*		let geometry = new THREE.SphereGeometry(5, 30, 30);
		let material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
        let mesh = new THREE.Mesh(geometry, material);
        this.scene.add(mesh);*/




		this.scene.add(meshCircle)



    /*    function CircleGeometry( mesh ) {
            var data = {
                radius: 2,
                segments: 64,
                thetaStart: 1,
                thetaLength: Math.PI * 2
            };
            function generateGeometry() {
                updateGroupGeometry( mesh,
                    new THREE.CircleGeometry(
                        data.radius, data.segments, data.thetaStart, data.thetaLength
                    )
                );
            }
            var folder = gui.addFolder( 'THREE.CircleGeometry' );
            folder.add( data, 'radius', 1, 100 ).onChange( generateGeometry );
            folder.add( data, 'segments', -10, 100 ).onChange( generateGeometry );
            folder.add( data, 'thetaStart', -10, 100 ).onChange( generateGeometry );
            folder.add( data, 'thetaLength', 0, Math.PI * 2 ).onChange( generateGeometry );
            generateGeometry();
        }
        function circle(mesh) {
            let data = {
                radius: 5,
                segments: 64,
                thetaStart: 1,
                thetaLength: Math.PI * 2
            }
            function generateGeometry() {
                var circleGeometry = new THREE.CircleGeometry(data.radius, data.segments, data.thetaStart, data.thetaLength);
                var geometry = new THREE.Geometry();
                for(let i = 1; i <= data.segments; i++){
                    geometry.vertices.push( circleGeometry.vertices[i] );
                }
                geometry.vertices.push( geometry.vertices[0] );
                updateGroupGeometry( mesh, geometry );
            }
            var folder = gui.addFolder( 'THREE.CircleGeometry' );
            folder.add( data, 'radius', 0, Math.PI * 2 ).onChange( generateGeometry );
            folder.add( data, 'segments', -10, 100 ).onChange( generateGeometry );
            folder.add( data, 'thetaStart', -10, 100 ).onChange( generateGeometry );
            folder.add( data, 'thetaLength', 0, Math.PI * 2 ).onChange( generateGeometry );
            generateGeometry();
        }
        function RingGeometry( mesh ) {
            var data = {
                innerRadius: 5,
                outerRadius: 10,
                thetaSegments: 8,
                phiSegments: 8,
                thetaStart: 0,
                thetaLength: Math.PI * 2
            };
            function generateGeometry() {
                updateGroupGeometry( mesh,
                    new THREE.RingGeometry(
                        data.innerRadius, data.outerRadius, data.thetaSegments, data.phiSegments, data.thetaStart, data.thetaLength
                    )
                );
            }
            var folder = gui.addFolder( 'THREE.RingGeometry' );
            folder.add( data, 'innerRadius', 1, 100 ).onChange( generateGeometry );
            folder.add( data, 'outerRadius', 1, 100 ).onChange( generateGeometry );
            folder.add( data, 'thetaSegments', 1, 100 ).step( 1 ).onChange( generateGeometry );
            folder.add( data, 'phiSegments', 1, 100 ).step( 1 ).onChange( generateGeometry );
            folder.add( data, 'thetaStart', 0, Math.PI * 2 ).onChange( generateGeometry );
            folder.add( data, 'thetaLength', 0, Math.PI * 2 ).onChange( generateGeometry );
            generateGeometry();
        }
        function TorusBufferGeometry( mesh ) {
            var data = {
                radius: 2,
                tube: 0.05,
                radialSegments: 16,
                tubularSegments: 195,
                arc: Math.PI * 2
            };
            function generateGeometry() {
                updateGroupGeometry( mesh,
                    new THREE.TorusBufferGeometry(
                        data.radius, data.tube, data.radialSegments, data.tubularSegments, data.arc,
                    )
                );
            }
            var folder = gui.addFolder( 'THREE.TorusBufferGeometry' );
            folder.add( data, 'radius', 1, 100 ).onChange( generateGeometry );
            folder.add( data, 'tube', -10, 100 ).onChange( generateGeometry );
            folder.add( data, 'arc', 0, Math.PI * 2 ).onChange( generateGeometry );
            generateGeometry();
        }
        function EllipseCurve( mesh ) {
            var data = {
                ax: 0, aY: 0,
                xRadius: 1, yRadius: 1,
                aStartAngle: 0, aEndAngle: 2 * Math.PI,
                aClockwise: false,
                aRotation: 0,
            };
            function generateGeometry() {
                var curve = new THREE.EllipseCurve(
                    data.ax, data.aY, data.xRadius, data.yRadius, data.aStartAngle,
                    data.aEndAngle, data.aClockwise, data.aRotation
                );
                var points = curve.getPoints( 50 );
                var geometry = new THREE.BufferGeometry(16).setFromPoints( points );
                updateGroupGeometry( mesh, geometry );
            }
            var folder = gui.addFolder( 'THREE.EllipseCurve' );
            folder.add( data, 'xRadius', 1, 100 ).onChange( generateGeometry );
            folder.add( data, 'yRadius', 1, 100 ).onChange( generateGeometry );
            folder.add( data, 'aStartAngle', 0, Math.PI * 2 ).onChange( generateGeometry );
            folder.add( data, 'aEndAngle', 0, Math.PI * 2 ).onChange( generateGeometry );
            generateGeometry();
        }*/
    /*    function bendTheCone(r1, r2, rMain, theta, segments){
            var geom = new THREE.CylinderGeometry(r1, r2, theta, 3, segments);
            geom.translate(rMain, theta / 2 ,0);

            geom.vertices.forEach(function(vertex){
                var localTheta = vertex.y;
                var localRadius = vertex.x;
                vertex.x = Math.cos(localTheta) * localRadius;
                vertex.y = Math.sin(localTheta) * localRadius;
            });
            geom.computeFaceNormals();
            geom.computeVertexNormals();
            return geom;
        }
        var geometry = bendTheCone(0.5, 0.5, 10, THREE.Math.degToRad(360), 60);
        var mesh = new THREE.Mesh(geometry, new THREE.LineBasicMaterial());
        this.scene.add(mesh);*/
	}

	setupCamera() {
		this.camera = new THREE.PerspectiveCamera(45, 0, 0.0001, 10000);
		//this.camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 5000);
		this.cameraBaseX = this.isGrid ? -20 : 0;
		this.cameraBaseY = this.isGrid ? 15 : 0;
		this.cameraBaseZ = this.isGrid ? 20 : 30;

		this.camera.position.x = this.cameraBaseX;
		this.camera.position.y = this.cameraBaseY;
		this.camera.position.z = this.cameraBaseZ;
	}

	setupRenderer() {
		this.renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true
		});
		this.dom.container.appendChild(this.renderer.domElement);
	}

	setupControls() {
		if(this.isOrbit) {
			this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
			this.controls.enableDamping = true;
			this.controls.dampingFactor = 0.9;
			this.controls.enableKeys = false;

			this.dom.timescaleWrap.style.visibility = 'visible';
		}
	}

	setupHelpers() {
		if(this.isGrid) {
			this.gridOpacityMap = [
				0.4, // 1
				0.2, // 2
				0.2, // 3
				0.2, // 4
				0.1, // 5
				0.2, // 6
				0.1, // 7
				0.1  // 8
			];
			this.gridHelper = new THREE.GridHelper(300, 60, 0xffffff, 0xffffff);
			this.gridHelper.material.transparent = true;
			this.gridHelper.material.opacity = this.gridOpacityMap[demoNum - 1];
			this.scene.add(this.gridHelper);

			this.axisOpacityMap = [
				1, // 1
				0.6, // 2
				0.6, // 3
				0.6, // 4
				0.3, // 5
				0.6, // 6
				0.3, // 7
				0.3  // 8
			];
			this.axisHelper = new AxisHelper(150, this.axisOpacityMap[demoNum - 1]);
			this.scene.add(this.axisHelper);

			this.camera.lookAt(new THREE.Vector3());
		}
	}

	update() {
		this.deltaTimeSeconds = this.clock.getDelta();
		if(this.diffTime) {
			this.deltaTimeSeconds -= this.diffTime;
			this.diffTime = 0;
		}


        function updateGroupGeometry( mesh, geometry ) {
            mesh.children[ 0 ].geometry.dispose();
            mesh.children[ 0 ].geometry = geometry;
        }
        if (counter <= 2.04){
			counter = counter > 2 ? 2 : counter;
            EllipseCurve(meshCircle);
		}

        function EllipseCurve( mesh ) {
            y = counter
            counter += increase
            var data = {
                ax: 0, aY: 0,
                xRadius: 1, yRadius: 1,
                aStartAngle: 0, aEndAngle: Math.PI * y,
                aClockwise: false,
                aRotation: 0,
            };
            console.log( 'test' )
            function generateGeometry() {
                var curve = new THREE.EllipseCurve(
                    data.ax, data.aY, data.xRadius, data.yRadius, data.aStartAngle,
                    data.aEndAngle, data.aClockwise, data.aRotation
                );
                var points = curve.getPoints( 50 );
                var geometry = new THREE.BufferGeometry(16).setFromPoints( points );
                updateGroupGeometry( mesh, geometry );
            }

            generateGeometry();
        }

        function shape( mesh ) {
            y = counter
            counter += increase
            let data = {
                ax: 0, aY: 0,
                radius: 4,
                aStartAngle: 0, aEndAngle: Math.PI * y,
                aClockwise: false,
            };
            function generateGeometry() {
                let shape = new THREE.Shape();
                shape.absarc( data.ax, data.aY, data.radius, data.aStartAngle,
                    data.aEndAngle, data.aClockwise
                );
                let spacedPoints = shape.createSpacedPointsGeometry(360);
                let vertexColors = [];
                spacedPoints.vertices.forEach( function( item, index ){
                    vertexColors.push( new THREE.Color( 0xff0000 ) )
                });
                spacedPoints.colors = vertexColors;
                updateGroupGeometry( mesh, spacedPoints );
            }
         /*   let folder = gui.addFolder( 'THREE.Shape' );
            folder.add( data, 'aStartAngle', 0, Math.PI * 2 ).onChange( generateGeometry );
            folder.add( data, 'aEndAngle', 0, Math.PI * 2 ).onChange( generateGeometry );*/
            generateGeometry();
        }

		this.deltaTimeSeconds *= this.timescale;
		this.deltaTimeMilliseconds = this.deltaTimeSeconds * 1000;
		this.deltaTimeNormal = this.deltaTimeMilliseconds / (1000 / 60);
		this.elapsedMilliseconds += this.deltaTimeMilliseconds;

		this.system.update();

		if(this.isOrbit) {
			this.controls.update();
		}
	}

	render() {
		this.renderer.render(this.scene, this.camera);
	}

	listen() {
		window.addEventListener('resize', (e) => this.onResize(e));

		this.dom.replayButton.addEventListener('click', (e) => this.onReplayButtonClick(e));
		this.dom.debugButton.addEventListener('click', (e) => this.onDebugButtonClick(e));

		if(this.isOrbit) {
			this.dom.timescaleRange.addEventListener('change', (e) => this.onTimescaleRangeChange(e));
			this.dom.timescaleRange.addEventListener('mousemove', (e) => this.onTimescaleRangeChange(e));
		}

		this.hidden = null;
		this.visibilityChange = null;
		if(typeof document.hidden !== 'undefined') {
			this.hidden = 'hidden';
			this.visibilityChange = 'visibilitychange';
		} else if(typeof document.msHidden !== 'undefined') {
			this.hidden = 'msHidden';
			this.visibilityChange = 'msvisibilitychange';
		} else if(typeof document.webkitHidden !== 'undefined') {
			this.hidden = 'webkitHidden';
			this.visibilityChange = 'webkitvisibilitychange';
		}
		if(typeof document.addEventListener === 'undefined' || typeof document.hidden === 'undefined') {
		} else {
			window.addEventListener(this.visibilityChange, (e) => this.onVisibilityChange(e));
		}
	}

	replay() {
		document.documentElement.classList.remove('completed');
		document.documentElement.classList.add('loading');

		this.camera.position.x = this.cameraBaseX;
		this.camera.position.y = this.cameraBaseY;
		this.camera.position.z = this.cameraBaseZ;

		this.timescale = 1;
		this.deltaTimeSeconds = 1 / 60;
		this.deltaTimeMilliseconds = this.deltaTimeSeconds * 1000;
		this.deltaTimeNormal = this.deltaTimeMilliseconds / (1000 / 60);
		this.elapsedMilliseconds = 0;
		this.blurTime = 0;
		this.diffTime = 0;
		this.focusTime = 0;

		this.system.replay();
		this.completed = false;
		this.clock.start();
		this.loop();
	}

	complete() {
		if(this.isOrbit || this.isGrid) {
			return;
		}
		setTimeout(() => {
			this.clock.stop();
			cancelAnimationFrame(this.raf);
		}, 600);
		this.completed = true;
		this.dom.html.classList.remove('loading');
		this.dom.html.classList.add('completed');
	}

	onResize() {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.dpr = window.devicePixelRatio > 1 ? 2 : 1

		this.camera.aspect = this.width / this.height;
		this.camera.updateProjectionMatrix();

		this.renderer.setPixelRatio(this.dpr);
		this.renderer.setSize(this.width, this.height);
	}

	onReplayButtonClick(e) {
		e.preventDefault();
		this.replay();
	}

	onDebugButtonClick(e) {
		e.preventDefault();
		let baseURL = window.location.href.split('#')[0];
		if(this.isDebug) {
			if(history) {
				history.pushState('', document.title, window.location.pathname);
			} else {
				location.hash = '';
			}
			location.href = baseURL;
		} else {
			location.href = `${baseURL}#debug`;
		}
		location.reload();
	}

	onTimescaleRangeChange(e) {
		this.timescale = parseFloat(this.dom.timescaleRange.value);
		this.dom.timescaleValue.innerHTML = this.timescale.toFixed(1);
	}

	onVisibilityChange(e) {
		if(document.hidden) {
			this.blurTime = Date.now();
		} else {
			this.focusTime = Date.now();
			if(this.blurTime) {
				this.diffTime = (this.focusTime - this.blurTime) / 1000;
			}
		}
	}

	loop() {
		this.update();
		this.render();
        this.raf = window.requestAnimationFrame(() => this.loop() );
	}


}

module.exports = Loader;
