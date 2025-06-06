// Generated from portuguese.sbl by Snowball 3.0.1 - https://snowballstem.org/

/**@constructor*/
var PortugueseStemmer = function() {
    var base = new BaseStemmer();

    /** @const */ var a_0 = [
        ["", -1, 3],
        ["\u00E3", 0, 1],
        ["\u00F5", 0, 2]
    ];

    /** @const */ var a_1 = [
        ["", -1, 3],
        ["a~", 0, 1],
        ["o~", 0, 2]
    ];

    /** @const */ var a_2 = [
        ["ic", -1, -1],
        ["ad", -1, -1],
        ["os", -1, -1],
        ["iv", -1, 1]
    ];

    /** @const */ var a_3 = [
        ["ante", -1, 1],
        ["avel", -1, 1],
        ["\u00EDvel", -1, 1]
    ];

    /** @const */ var a_4 = [
        ["ic", -1, 1],
        ["abil", -1, 1],
        ["iv", -1, 1]
    ];

    /** @const */ var a_5 = [
        ["ica", -1, 1],
        ["\u00E2ncia", -1, 1],
        ["\u00EAncia", -1, 4],
        ["logia", -1, 2],
        ["ira", -1, 9],
        ["adora", -1, 1],
        ["osa", -1, 1],
        ["ista", -1, 1],
        ["iva", -1, 8],
        ["eza", -1, 1],
        ["idade", -1, 7],
        ["ante", -1, 1],
        ["mente", -1, 6],
        ["amente", 12, 5],
        ["\u00E1vel", -1, 1],
        ["\u00EDvel", -1, 1],
        ["ico", -1, 1],
        ["ismo", -1, 1],
        ["oso", -1, 1],
        ["amento", -1, 1],
        ["imento", -1, 1],
        ["ivo", -1, 8],
        ["a\u00E7a~o", -1, 1],
        ["u\u00E7a~o", -1, 3],
        ["ador", -1, 1],
        ["icas", -1, 1],
        ["\u00EAncias", -1, 4],
        ["logias", -1, 2],
        ["iras", -1, 9],
        ["adoras", -1, 1],
        ["osas", -1, 1],
        ["istas", -1, 1],
        ["ivas", -1, 8],
        ["ezas", -1, 1],
        ["idades", -1, 7],
        ["adores", -1, 1],
        ["antes", -1, 1],
        ["a\u00E7o~es", -1, 1],
        ["u\u00E7o~es", -1, 3],
        ["icos", -1, 1],
        ["ismos", -1, 1],
        ["osos", -1, 1],
        ["amentos", -1, 1],
        ["imentos", -1, 1],
        ["ivos", -1, 8]
    ];

    /** @const */ var a_6 = [
        ["ada", -1, 1],
        ["ida", -1, 1],
        ["ia", -1, 1],
        ["aria", 2, 1],
        ["eria", 2, 1],
        ["iria", 2, 1],
        ["ara", -1, 1],
        ["era", -1, 1],
        ["ira", -1, 1],
        ["ava", -1, 1],
        ["asse", -1, 1],
        ["esse", -1, 1],
        ["isse", -1, 1],
        ["aste", -1, 1],
        ["este", -1, 1],
        ["iste", -1, 1],
        ["ei", -1, 1],
        ["arei", 16, 1],
        ["erei", 16, 1],
        ["irei", 16, 1],
        ["am", -1, 1],
        ["iam", 20, 1],
        ["ariam", 21, 1],
        ["eriam", 21, 1],
        ["iriam", 21, 1],
        ["aram", 20, 1],
        ["eram", 20, 1],
        ["iram", 20, 1],
        ["avam", 20, 1],
        ["em", -1, 1],
        ["arem", 29, 1],
        ["erem", 29, 1],
        ["irem", 29, 1],
        ["assem", 29, 1],
        ["essem", 29, 1],
        ["issem", 29, 1],
        ["ado", -1, 1],
        ["ido", -1, 1],
        ["ando", -1, 1],
        ["endo", -1, 1],
        ["indo", -1, 1],
        ["ara~o", -1, 1],
        ["era~o", -1, 1],
        ["ira~o", -1, 1],
        ["ar", -1, 1],
        ["er", -1, 1],
        ["ir", -1, 1],
        ["as", -1, 1],
        ["adas", 47, 1],
        ["idas", 47, 1],
        ["ias", 47, 1],
        ["arias", 50, 1],
        ["erias", 50, 1],
        ["irias", 50, 1],
        ["aras", 47, 1],
        ["eras", 47, 1],
        ["iras", 47, 1],
        ["avas", 47, 1],
        ["es", -1, 1],
        ["ardes", 58, 1],
        ["erdes", 58, 1],
        ["irdes", 58, 1],
        ["ares", 58, 1],
        ["eres", 58, 1],
        ["ires", 58, 1],
        ["asses", 58, 1],
        ["esses", 58, 1],
        ["isses", 58, 1],
        ["astes", 58, 1],
        ["estes", 58, 1],
        ["istes", 58, 1],
        ["is", -1, 1],
        ["ais", 71, 1],
        ["eis", 71, 1],
        ["areis", 73, 1],
        ["ereis", 73, 1],
        ["ireis", 73, 1],
        ["\u00E1reis", 73, 1],
        ["\u00E9reis", 73, 1],
        ["\u00EDreis", 73, 1],
        ["\u00E1sseis", 73, 1],
        ["\u00E9sseis", 73, 1],
        ["\u00EDsseis", 73, 1],
        ["\u00E1veis", 73, 1],
        ["\u00EDeis", 73, 1],
        ["ar\u00EDeis", 84, 1],
        ["er\u00EDeis", 84, 1],
        ["ir\u00EDeis", 84, 1],
        ["ados", -1, 1],
        ["idos", -1, 1],
        ["amos", -1, 1],
        ["\u00E1ramos", 90, 1],
        ["\u00E9ramos", 90, 1],
        ["\u00EDramos", 90, 1],
        ["\u00E1vamos", 90, 1],
        ["\u00EDamos", 90, 1],
        ["ar\u00EDamos", 95, 1],
        ["er\u00EDamos", 95, 1],
        ["ir\u00EDamos", 95, 1],
        ["emos", -1, 1],
        ["aremos", 99, 1],
        ["eremos", 99, 1],
        ["iremos", 99, 1],
        ["\u00E1ssemos", 99, 1],
        ["\u00EAssemos", 99, 1],
        ["\u00EDssemos", 99, 1],
        ["imos", -1, 1],
        ["armos", -1, 1],
        ["ermos", -1, 1],
        ["irmos", -1, 1],
        ["\u00E1mos", -1, 1],
        ["ar\u00E1s", -1, 1],
        ["er\u00E1s", -1, 1],
        ["ir\u00E1s", -1, 1],
        ["eu", -1, 1],
        ["iu", -1, 1],
        ["ou", -1, 1],
        ["ar\u00E1", -1, 1],
        ["er\u00E1", -1, 1],
        ["ir\u00E1", -1, 1]
    ];

    /** @const */ var a_7 = [
        ["a", -1, 1],
        ["i", -1, 1],
        ["o", -1, 1],
        ["os", -1, 1],
        ["\u00E1", -1, 1],
        ["\u00ED", -1, 1],
        ["\u00F3", -1, 1]
    ];

    /** @const */ var a_8 = [
        ["e", -1, 1],
        ["\u00E7", -1, 2],
        ["\u00E9", -1, 1],
        ["\u00EA", -1, 1]
    ];

    /** @const */ var /** Array<int> */ g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 19, 12, 2];

    var /** number */ I_p2 = 0;
    var /** number */ I_p1 = 0;
    var /** number */ I_pV = 0;


    /** @return {boolean} */
    function r_prelude() {
        var /** number */ among_var;
        while(true)
        {
            /** @const */ var /** number */ v_1 = base.cursor;
            lab0: {
                base.bra = base.cursor;
                among_var = base.find_among(a_0);
                base.ket = base.cursor;
                switch (among_var) {
                    case 1:
                        if (!base.slice_from("a~"))
                        {
                            return false;
                        }
                        break;
                    case 2:
                        if (!base.slice_from("o~"))
                        {
                            return false;
                        }
                        break;
                    case 3:
                        if (base.cursor >= base.limit)
                        {
                            break lab0;
                        }
                        base.cursor++;
                        break;
                }
                continue;
            }
            base.cursor = v_1;
            break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_mark_regions() {
        I_pV = base.limit;
        I_p1 = base.limit;
        I_p2 = base.limit;
        /** @const */ var /** number */ v_1 = base.cursor;
        lab0: {
            lab1: {
                /** @const */ var /** number */ v_2 = base.cursor;
                lab2: {
                    if (!(base.in_grouping(g_v, 97, 250)))
                    {
                        break lab2;
                    }
                    lab3: {
                        /** @const */ var /** number */ v_3 = base.cursor;
                        lab4: {
                            if (!(base.out_grouping(g_v, 97, 250)))
                            {
                                break lab4;
                            }
                            if (!base.go_out_grouping(g_v, 97, 250))
                            {
                                break lab4;
                            }
                            base.cursor++;
                            break lab3;
                        }
                        base.cursor = v_3;
                        if (!(base.in_grouping(g_v, 97, 250)))
                        {
                            break lab2;
                        }
                        if (!base.go_in_grouping(g_v, 97, 250))
                        {
                            break lab2;
                        }
                        base.cursor++;
                    }
                    break lab1;
                }
                base.cursor = v_2;
                if (!(base.out_grouping(g_v, 97, 250)))
                {
                    break lab0;
                }
                lab5: {
                    /** @const */ var /** number */ v_4 = base.cursor;
                    lab6: {
                        if (!(base.out_grouping(g_v, 97, 250)))
                        {
                            break lab6;
                        }
                        if (!base.go_out_grouping(g_v, 97, 250))
                        {
                            break lab6;
                        }
                        base.cursor++;
                        break lab5;
                    }
                    base.cursor = v_4;
                    if (!(base.in_grouping(g_v, 97, 250)))
                    {
                        break lab0;
                    }
                    if (base.cursor >= base.limit)
                    {
                        break lab0;
                    }
                    base.cursor++;
                }
            }
            I_pV = base.cursor;
        }
        base.cursor = v_1;
        /** @const */ var /** number */ v_5 = base.cursor;
        lab7: {
            if (!base.go_out_grouping(g_v, 97, 250))
            {
                break lab7;
            }
            base.cursor++;
            if (!base.go_in_grouping(g_v, 97, 250))
            {
                break lab7;
            }
            base.cursor++;
            I_p1 = base.cursor;
            if (!base.go_out_grouping(g_v, 97, 250))
            {
                break lab7;
            }
            base.cursor++;
            if (!base.go_in_grouping(g_v, 97, 250))
            {
                break lab7;
            }
            base.cursor++;
            I_p2 = base.cursor;
        }
        base.cursor = v_5;
        return true;
    };

    /** @return {boolean} */
    function r_postlude() {
        var /** number */ among_var;
        while(true)
        {
            /** @const */ var /** number */ v_1 = base.cursor;
            lab0: {
                base.bra = base.cursor;
                among_var = base.find_among(a_1);
                base.ket = base.cursor;
                switch (among_var) {
                    case 1:
                        if (!base.slice_from("\u00E3"))
                        {
                            return false;
                        }
                        break;
                    case 2:
                        if (!base.slice_from("\u00F5"))
                        {
                            return false;
                        }
                        break;
                    case 3:
                        if (base.cursor >= base.limit)
                        {
                            break lab0;
                        }
                        base.cursor++;
                        break;
                }
                continue;
            }
            base.cursor = v_1;
            break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_RV() {
        return I_pV <= base.cursor;
    };

    /** @return {boolean} */
    function r_R1() {
        return I_p1 <= base.cursor;
    };

    /** @return {boolean} */
    function r_R2() {
        return I_p2 <= base.cursor;
    };

    /** @return {boolean} */
    function r_standard_suffix() {
        var /** number */ among_var;
        base.ket = base.cursor;
        among_var = base.find_among_b(a_5);
        if (among_var == 0)
        {
            return false;
        }
        base.bra = base.cursor;
        switch (among_var) {
            case 1:
                if (!r_R2())
                {
                    return false;
                }
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                if (!r_R2())
                {
                    return false;
                }
                if (!base.slice_from("log"))
                {
                    return false;
                }
                break;
            case 3:
                if (!r_R2())
                {
                    return false;
                }
                if (!base.slice_from("u"))
                {
                    return false;
                }
                break;
            case 4:
                if (!r_R2())
                {
                    return false;
                }
                if (!base.slice_from("ente"))
                {
                    return false;
                }
                break;
            case 5:
                if (!r_R1())
                {
                    return false;
                }
                if (!base.slice_del())
                {
                    return false;
                }
                /** @const */ var /** number */ v_1 = base.limit - base.cursor;
                lab0: {
                    base.ket = base.cursor;
                    among_var = base.find_among_b(a_2);
                    if (among_var == 0)
                    {
                        base.cursor = base.limit - v_1;
                        break lab0;
                    }
                    base.bra = base.cursor;
                    if (!r_R2())
                    {
                        base.cursor = base.limit - v_1;
                        break lab0;
                    }
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    switch (among_var) {
                        case 1:
                            base.ket = base.cursor;
                            if (!(base.eq_s_b("at")))
                            {
                                base.cursor = base.limit - v_1;
                                break lab0;
                            }
                            base.bra = base.cursor;
                            if (!r_R2())
                            {
                                base.cursor = base.limit - v_1;
                                break lab0;
                            }
                            if (!base.slice_del())
                            {
                                return false;
                            }
                            break;
                    }
                }
                break;
            case 6:
                if (!r_R2())
                {
                    return false;
                }
                if (!base.slice_del())
                {
                    return false;
                }
                /** @const */ var /** number */ v_2 = base.limit - base.cursor;
                lab1: {
                    base.ket = base.cursor;
                    if (base.find_among_b(a_3) == 0)
                    {
                        base.cursor = base.limit - v_2;
                        break lab1;
                    }
                    base.bra = base.cursor;
                    if (!r_R2())
                    {
                        base.cursor = base.limit - v_2;
                        break lab1;
                    }
                    if (!base.slice_del())
                    {
                        return false;
                    }
                }
                break;
            case 7:
                if (!r_R2())
                {
                    return false;
                }
                if (!base.slice_del())
                {
                    return false;
                }
                /** @const */ var /** number */ v_3 = base.limit - base.cursor;
                lab2: {
                    base.ket = base.cursor;
                    if (base.find_among_b(a_4) == 0)
                    {
                        base.cursor = base.limit - v_3;
                        break lab2;
                    }
                    base.bra = base.cursor;
                    if (!r_R2())
                    {
                        base.cursor = base.limit - v_3;
                        break lab2;
                    }
                    if (!base.slice_del())
                    {
                        return false;
                    }
                }
                break;
            case 8:
                if (!r_R2())
                {
                    return false;
                }
                if (!base.slice_del())
                {
                    return false;
                }
                /** @const */ var /** number */ v_4 = base.limit - base.cursor;
                lab3: {
                    base.ket = base.cursor;
                    if (!(base.eq_s_b("at")))
                    {
                        base.cursor = base.limit - v_4;
                        break lab3;
                    }
                    base.bra = base.cursor;
                    if (!r_R2())
                    {
                        base.cursor = base.limit - v_4;
                        break lab3;
                    }
                    if (!base.slice_del())
                    {
                        return false;
                    }
                }
                break;
            case 9:
                if (!r_RV())
                {
                    return false;
                }
                if (!(base.eq_s_b("e")))
                {
                    return false;
                }
                if (!base.slice_from("ir"))
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_verb_suffix() {
        if (base.cursor < I_pV)
        {
            return false;
        }
        /** @const */ var /** number */ v_1 = base.limit_backward;
        base.limit_backward = I_pV;
        base.ket = base.cursor;
        if (base.find_among_b(a_6) == 0)
        {
            base.limit_backward = v_1;
            return false;
        }
        base.bra = base.cursor;
        if (!base.slice_del())
        {
            return false;
        }
        base.limit_backward = v_1;
        return true;
    };

    /** @return {boolean} */
    function r_residual_suffix() {
        base.ket = base.cursor;
        if (base.find_among_b(a_7) == 0)
        {
            return false;
        }
        base.bra = base.cursor;
        if (!r_RV())
        {
            return false;
        }
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_residual_form() {
        var /** number */ among_var;
        base.ket = base.cursor;
        among_var = base.find_among_b(a_8);
        if (among_var == 0)
        {
            return false;
        }
        base.bra = base.cursor;
        switch (among_var) {
            case 1:
                if (!r_RV())
                {
                    return false;
                }
                if (!base.slice_del())
                {
                    return false;
                }
                base.ket = base.cursor;
                lab0: {
                    /** @const */ var /** number */ v_1 = base.limit - base.cursor;
                    lab1: {
                        if (!(base.eq_s_b("u")))
                        {
                            break lab1;
                        }
                        base.bra = base.cursor;
                        /** @const */ var /** number */ v_2 = base.limit - base.cursor;
                        if (!(base.eq_s_b("g")))
                        {
                            break lab1;
                        }
                        base.cursor = base.limit - v_2;
                        break lab0;
                    }
                    base.cursor = base.limit - v_1;
                    if (!(base.eq_s_b("i")))
                    {
                        return false;
                    }
                    base.bra = base.cursor;
                    /** @const */ var /** number */ v_3 = base.limit - base.cursor;
                    if (!(base.eq_s_b("c")))
                    {
                        return false;
                    }
                    base.cursor = base.limit - v_3;
                }
                if (!r_RV())
                {
                    return false;
                }
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                if (!base.slice_from("c"))
                {
                    return false;
                }
                break;
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        /** @const */ var /** number */ v_1 = base.cursor;
        r_prelude();
        base.cursor = v_1;
        r_mark_regions();
        base.limit_backward = base.cursor; base.cursor = base.limit;
        /** @const */ var /** number */ v_2 = base.limit - base.cursor;
        lab0: {
            lab1: {
                /** @const */ var /** number */ v_3 = base.limit - base.cursor;
                lab2: {
                    /** @const */ var /** number */ v_4 = base.limit - base.cursor;
                    lab3: {
                        /** @const */ var /** number */ v_5 = base.limit - base.cursor;
                        lab4: {
                            if (!r_standard_suffix())
                            {
                                break lab4;
                            }
                            break lab3;
                        }
                        base.cursor = base.limit - v_5;
                        if (!r_verb_suffix())
                        {
                            break lab2;
                        }
                    }
                    base.cursor = base.limit - v_4;
                    /** @const */ var /** number */ v_6 = base.limit - base.cursor;
                    lab5: {
                        base.ket = base.cursor;
                        if (!(base.eq_s_b("i")))
                        {
                            break lab5;
                        }
                        base.bra = base.cursor;
                        /** @const */ var /** number */ v_7 = base.limit - base.cursor;
                        if (!(base.eq_s_b("c")))
                        {
                            break lab5;
                        }
                        base.cursor = base.limit - v_7;
                        if (!r_RV())
                        {
                            break lab5;
                        }
                        if (!base.slice_del())
                        {
                            return false;
                        }
                    }
                    base.cursor = base.limit - v_6;
                    break lab1;
                }
                base.cursor = base.limit - v_3;
                if (!r_residual_suffix())
                {
                    break lab0;
                }
            }
        }
        base.cursor = base.limit - v_2;
        /** @const */ var /** number */ v_8 = base.limit - base.cursor;
        r_residual_form();
        base.cursor = base.limit - v_8;
        base.cursor = base.limit_backward;
        /** @const */ var /** number */ v_9 = base.cursor;
        r_postlude();
        base.cursor = v_9;
        return true;
    };

    /**@return{string}*/
    this['stemWord'] = function(/**string*/word) {
        base.setCurrent(word);
        this.stem();
        return base.getCurrent();
    };
};
