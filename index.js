// 2021-06-25

/**
 * Decrypts encrypted cipher signature.
 * @param {string} signature encrypted cipher string
 * @returns decrypted signature
 */
function decrypt(signature) {
    const pB = {
        vg: function (sig, depth) {
            sig.reverse();
            return sig;
        },
        fl: function (sig, depth) {
            [sig[0], sig[depth % sig.length]] = [sig[depth % sig.length], sig[0]];
            return sig;
        },
        IF: function (sig, depth) {
            sig.splice(0, depth);
            return sig;
        }
    };
    
    const sig = [...signature];
    
    pB.vg(sig, 47);
    pB.fl(sig, 45);
    pB.fl(sig, 32);
    
    return sig.join("");
}
