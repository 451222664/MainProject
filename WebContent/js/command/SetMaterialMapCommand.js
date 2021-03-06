/**
 * @author dforrer / https://github.com/dforrer
 * Developed as part of a project at University of Applied Sciences and Arts Northwestern Switzerland (www.fhnw.ch)
 */

/**
 * @param object THREE.Object3D
 * @param mapName string
 * @param newMap THREE.Texture
 * @constructor
 */

var SetMaterialMapCommand = function ( object, mapName, newMap ) {

	Command.call( this );
	this.type = 'SetMaterialMapCommand';
	this.name = 'Set Material.' + mapName;

	this.object = object;
	this.mapName = mapName;
	this.oldMap = ( object !== undefined ) ? object.material[ mapName ] : undefined;
	this.newMap = newMap;

};

SetMaterialMapCommand.prototype = {

	execute: function () {

			this.object.material[ this.mapName ] = this.newMap;
			this.object.material.needsUpdate = true;
			this.show.signals.materialChanged.dispatch( this.object.material );

	},

	undo: function () {

			this.object.material[ this.mapName ] = this.oldMap;
			this.object.material.needsUpdate = true;
			this.show.signals.materialChanged.dispatch( this.object.material );

	}

};
