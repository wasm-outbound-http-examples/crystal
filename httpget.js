const wasmSource="httpget.wasm",isDenoRuntime=!!globalThis.Deno,isNodeRuntime=!!globalThis.process,__utf8Encoder=new TextEncoder,__utf8Decoder=new TextDecoder("utf-8",{fatal:!0}),__heap=[],__free=[];let __memory,__string_type_id,__exports;function __make_ref(e){var t=__free.length?__free.pop():__heap.length;return __heap[t]=e,t}function __drop_ref(e){__heap[e]=void 0,__free.push(e)}function __helper_1(e){var t=__utf8Encoder.encode(e),r=__exports.__crystal_malloc_atomic(13+t.byteLength);__memory.setUint32(r,__string_type_id,!0),__memory.setUint32(r+4,t.byteLength,!0),__memory.setUint32(r+8,e.length,!0);for(let e=0;e<t.byteLength;e++)__memory.setUint8(r+12+e,t[e]);return __memory.setUint8(r+12+t.byteLength,0),r}function __helper_3(e,t){return __utf8Decoder.decode(new Uint8Array(__memory.buffer,e,t))}async function init(){if(!__exports){const r=isNodeRuntime&&require("crypto"),t=isNodeRuntime&&require("fs/promises");var e={env:{_js2(){return __make_ref(console)},_js55(e,t,r){return __heap[e].log(__helper_3(t,r))},_js57(e){return __helper_1(__heap[e].responseText)},_js58(e){return __heap[e].send()},_js59(e,t,r,_,n,o){return __heap[e].open(__helper_3(t,r),__helper_3(_,n),1===o)},_js60(){return __make_ref(new XMLHttpRequest)}},wasi_snapshot_preview1:{fd_close(){throw new Error("fd_close")},fd_fdstat_get(e,t){return 2<e?8:(__memory.setUint8(t,4,!0),__memory.setUint16(t+2,0,!0),__memory.setUint16(t+4,0,!0),__memory.setBigUint64(t+8,BigInt(0),!0),__memory.setBigUint64(t+16,BigInt(0),!0),0)},fd_fdstat_set_flags(e){if(2<e)return 8;throw new Error("fd_fdstat_set_flags")},fd_filestat_get(e,t){return 2<e?8:(__memory.setBigUint64(t,BigInt(0),!0),__memory.setBigUint64(t+8,BigInt(0),!0),__memory.setUint8(t+16,4,!0),__memory.setBigUint64(t+24,BigInt(1),!0),__memory.setBigUint64(t+32,BigInt(0),!0),__memory.setBigUint64(t+40,BigInt(0),!0),__memory.setBigUint64(t+48,BigInt(0),!0),__memory.setBigUint64(t+56,BigInt(0),!0),0)},fd_prestat_get(){return 8},fd_prestat_dir_name(){return 8},fd_seek(){throw new Error("fd_seek")},fd_read(){throw new Error("fd_read")},path_create_directory(){throw new Error("path_create_directory")},path_filestat_get(){throw new Error("path_filestat_get")},path_open(){throw new Error("path_open")},fd_write(t,r,_,e){if(t<1||2<t)return 8;0==__memory.buffer.byteLength&&(__memory=new DataView(__exports.memory.buffer));let n=0;for(let e=0;e<_;e++){var o=__memory.getUint32(r+8*e,!0),i=__memory.getUint32(r+8*e+4,!0);if(n+=i,isDenoRuntime)Deno.writeAllSync(1===t?Deno.stdout:Deno.stderr,new Uint8Array(__memory.buffer,o,i));else if(isNodeRuntime){const s=1===t?process.stdout:process.stderr;s.write(new Uint8Array(__memory.buffer,o,i))}else(1===t?console.log:console.error)(__utf8Decoder.decode(new Uint8Array(__memory.buffer,o,i)))}return __memory.setUint32(e,n,!0),0},proc_exit(e){throw new Error("proc_exit "+e)},random_get(e,t){return __memory.buffer.byteLength<t&&(__memory=new DataView(__exports.memory.buffer)),isNodeRuntime?r.randomBytes(t).copy(new Uint8Array(__memory.buffer,e,t)):crypto.getRandomValues(new Uint8Array(__memory.buffer,e,t)),0},environ_get(){return 0},environ_sizes_get(e,t){return(__memory=0==__memory.buffer.byteLength?new DataView(__exports.memory.buffer):__memory).setUint32(e,0,!0),__memory.setUint32(t,0,!0),0},clock_time_get(e,t,r){e=BigInt(1e6*(0===e?Date:performance).now());return __memory.setBigUint64(r,e,!0),0}}},e=(isDenoRuntime?await WebAssembly.instantiate(await Deno.readFile(wasmSource),e):isNodeRuntime?await WebAssembly.instantiate(await t.readFile(wasmSource),e):await WebAssembly.instantiateStreaming(fetch(wasmSource),e))["instance"];(__exports=e.exports).memory.grow(1),__memory=new DataView(__exports.memory.buffer),__string_type_id=__exports.__js_bridge_get_type_id(0),__exports._start()}}"object"==typeof exports?module.exports=init:init().catch(console.error),isNodeRuntime&&require.main===module&&init().catch(e=>{console.error(e),process.exit(1)});