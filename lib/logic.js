/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/**
 * Publicar declaraciones sobre las lineas de transmision
 * @param {co.edu.eafit.mvmblockchain.PublicarDeclaracionLinea} publicarDeclaracionLinea
 * @transaction
 */
async function publicarDeclaracionLinea(publicacion) {
    const registroActivos = await getAssetRegistry('co.edu.eafit.mvmblockchain.ActivoDeclaracionLinea');
    const factory = getFactory();

    const activo = factory.newResource('co.edu.eafit.mvmblockchain', 'ActivoDeclaracionLinea', publicacion.idDeclaracionLinea);
    activo.declaracionLinea = publicacion.declaracionLinea;

    await registroActivos.add(activo);
}

/**
 * Publicar declaraciones sobre los transformadores
 * @param {co.edu.eafit.mvmblockchain.PublicarDeclaracionTransformador} publicarDeclaracionTransformador
 * @transaction
 */
async function publicarDeclaracionTransformador(publicacion) {
    const registroActivos = await getAssetRegistry('co.edu.eafit.mvmblockchain.ActivoDeclaracionTransformador');
    const factory = getFactory();

    const activo = factory.newResource('co.edu.eafit.mvmblockchain', 'ActivoDeclaracionTransformador', publicacion.idDeclaracionTransformador);
    activo.declaracionTransformador = publicacion.declaracionTransformador;

    await registroActivos.add(activo);
}

/**
 * Publicar declaraciones sobre los condensadores
 * @param {co.edu.eafit.mvmblockchain.PublicarDeclaracionCondensador} publicarDeclaracionCondensador
 * @transaction
 */
async function publicarDeclaracionCondensador(publicacion) {
    const registroActivos = await getAssetRegistry('co.edu.eafit.mvmblockchain.ActivoDeclaracionCondensador');
    const factory = getFactory();

    const activo = factory.newResource('co.edu.eafit.mvmblockchain', 'ActivoDeclaracionCondensador', publicacion.idDeclaracionCondensador);
    activo.declaracionCondensador = publicacion.declaracionCondensador;

    await registroActivos.add(activo);
}

/**
 * Publicar declaraciones sobre los reactores
 * @param {co.edu.eafit.mvmblockchain.PublicarDeclaracionReactor} publicarDeclaracionReactor
 * @transaction
 */
async function publicarDeclaracionReactor(publicacion) {
    const registroActivos = await getAssetRegistry('co.edu.eafit.mvmblockchain.ActivoDeclaracionReactor');
    const factory = getFactory();

    const activo = factory.newResource('co.edu.eafit.mvmblockchain', 'ActivoDeclaracionReactor', publicacion.idDeclaracionReactor);
    activo.declaracionReactor = publicacion.declaracionReactor;

    await registroActivos.add(activo);
}

/**
 * Publicar declaraciones sobre las unidades de generacion
 * @param {co.edu.eafit.mvmblockchain.PublicarDeclaracionUnidadesDeGeneracion} publicarDeclaracionUnidadesDeGeneracion
 * @transaction
 */
async function publicarDeclaracionUnidadesDeGeneracion(publicacion) {
    const registroActivos = await getAssetRegistry('co.edu.eafit.mvmblockchain.ActivoDeclaracionUnidadesDeGeneracion');
    const factory = getFactory();

    const activo = factory.newResource('co.edu.eafit.mvmblockchain', 'ActivoDeclaracionUnidadesDeGeneracion', publicacion.idDeclaracionUnidadesDeGeneracion);
    activo.declaracionUnidadesDeGeneracion = publicacion.declaracionUnidadesDeGeneracion;

    await registroActivos.add(activo);
}

/**
 * Publicar declaraciones sobre las SVCs
 * @param {co.edu.eafit.mvmblockchain.PublicarDeclaracionSvc} publicarDeclaracionSvc
 * @transaction
 */
async function publicarDeclaracionSvc(publicacion) {
    const registroActivos = await getAssetRegistry('co.edu.eafit.mvmblockchain.ActivoDeclaracionSvc');
    const factory = getFactory();

    const activo = factory.newResource('co.edu.eafit.mvmblockchain', 'ActivoDeclaracionSvc', publicacion.idDeclaracionSvc);
    activo.declaracionSvc = publicacion.declaracionSvc;

    await registroActivos.add(activo);
}
