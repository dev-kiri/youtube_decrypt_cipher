// 2021-06-25 dev-kiri
// 그새 또 코드가 바꼈네;;

/**
 * Decrypts encrypted cipher signature.
 * @param {string} signature encrypted cipher string
 * @returns {string} decrypted signature
 */
function decrypt(signature) {
    const nB = {
        UE: function (sig, depth) {
            sig.reverse();
            return sig;
        },
        Cz: function (sig, depth) {
            [sig[0], sig[depth % sig.length]] = [sig[depth % sig.length], sig[0]];
            return sig;
        },
        mx: function (sig, depth) {
            sig.splice(0, depth);
            return sig;
        }
    };
    
    const sig = [...signature];
    
    nB.UE(a, 19); // UE (reverse)
    nB.Cz(a, 15); // Cz (swap)
    nB.mx(a, 3); // mx (splice)
    nB.Cz(a, 17); // Cz (swap)
    
    return sig.join("");
}
