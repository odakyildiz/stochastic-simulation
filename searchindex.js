Search.setIndex({"docnames": ["chapter-1/chapter-1", "chapter-2/LCG", "chapter-2/chapter-2", "chapter-2/composition", "chapter-2/inversion", "chapter-2/rejection-sampling", "chapter-2/transformation", "intro"], "filenames": ["chapter-1/chapter-1.ipynb", "chapter-2/LCG.ipynb", "chapter-2/chapter-2.ipynb", "chapter-2/composition.ipynb", "chapter-2/inversion.ipynb", "chapter-2/rejection-sampling.ipynb", "chapter-2/transformation.ipynb", "intro.md"], "titles": ["Chapter 1 - Introduction", "Uniform random variate generation", "Chapter 2 - Exact Generation of Random Variates", "Composition", "Inversion", "Rejection sampling", "Transformation methods", "Welcome to Stochastic Simulation"], "terms": {"To": [0, 1], "keep": 0, "thing": 0, "simpl": [0, 1, 2], "we": [0, 1, 2, 3, 4, 5, 6], "onli": [0, 5], "us": [0, 1, 3, 4, 5, 6, 7], "follow": [0, 3, 4, 5, 6], "python": 0, "librari": 0, "numpi": [0, 1, 3, 4, 5, 6], "numer": 0, "oper": 0, "matplotlib": [0, 1, 3, 4, 5, 6], "plot": [0, 1, 3, 4, 5, 6], "scipi": [0, 1], "scientif": 0, "when": 0, "need": [0, 1], "rememb": 0, "our": [0, 1, 4, 7], "aim": [0, 3, 5], "draw": [0, 5, 6], "random": [0, 3, 4, 5, 6, 7], "number": [0, 1], "from": [0, 1, 4, 5], "given": [0, 1], "distribut": [0, 1, 3, 5, 6], "In": [0, 1, 3, 4, 5, 6], "most": [0, 1], "case": [0, 5], "typic": 0, "code": [0, 4, 5, 7], "start": 0, "line": [0, 1, 4], "import": [0, 1, 3, 4, 5, 6], "pyplot": [0, 1, 3, 4, 5, 6], "plt": [0, 1, 3, 4, 5, 6], "np": [0, 1, 3, 4, 5, 6], "It": 0, "good": [0, 1, 4], "idea": [0, 1, 4], "learn": 0, "few": 0, "trick": 0, "about": [0, 1, 2], "fix": 0, "state": [0, 3, 4], "As": [0, 1, 3, 4, 5], "mention": 0, "cours": [0, 1, 4, 5], "pseudorandom": 0, "often": 0, "have": [0, 1, 4, 5], "seed": [0, 1], "can": [0, 1, 3, 4, 5], "reproduc": 0, "same": 0, "sequenc": [0, 1], "thi": [0, 1, 2, 3, 4, 5, 7], "veri": [0, 1, 4], "debug": 0, "purpos": [0, 1, 5], "For": 0, "exampl": [0, 3, 4, 5, 6], "you": [0, 1, 3, 4, 7], "want": 0, "check": 0, "your": 0, "work": [0, 4, 7], "expect": [0, 4], "output": 0, "one": [0, 1], "obtain": 0, "befor": 0, "also": 0, "share": 0, "other": [0, 4], "thei": [0, 3], "result": [0, 1, 3], "ha": [0, 4], "function": [0, 4], "call": 0, "The": [0, 7], "global": [0, 4], "method": [0, 1, 2, 3, 4, 5, 7], "now": [0, 1, 4, 5], "being": [0, 4], "discourag": 0, "recommend": 0, "gener": [0, 4, 7], "instanc": 0, "let": [0, 1, 3, 4, 5, 6, 7], "defin": [0, 4], "thank": 0, "ayman": 0, "boustati": 0, "who": 0, "made": 0, "me": [0, 7], "awar": 0, "rng": [0, 1, 3, 4, 5, 6], "default_rng": [0, 1, 3, 4, 5, 6], "42": 0, "just": [0, 5], "note": [0, 1, 3, 4, 5, 7], "replac": 0, "usual": 0, "so": [0, 7], "see": [0, 1, 4, 5], "like": [0, 1], "convert": 0, "them": [0, 1], "although": [0, 1], "still": 0, "would": 0, "accept": [0, 5], "sai": [0, 1], "uniform": [0, 2, 3, 4, 5, 6, 7], "below": [0, 1, 4], "u": [0, 1, 4, 5], "0": [0, 1, 3, 4, 5, 6], "10": [0, 1, 3, 4, 5], "print": [0, 4], "77395605": 0, "43887844": 0, "85859792": 0, "69736803": 0, "09417735": 0, "97562235": 0, "7611397": 0, "78606431": 0, "12811363": 0, "45038594": 0, "consid": [0, 1], "demonstr": [0, 4, 5], "mont": 0, "carlo": 0, "seen": [0, 1], "lectur": [0, 4, 5, 7], "achiev": 0, "place": 0, "circl": [0, 6], "insid": 0, "squar": 0, "time": [0, 5], "point": [0, 1, 4], "whether": 0, "ar": [0, 1, 2, 4, 5, 7], "everi": 0, "x": [0, 1, 3, 4, 5, 6], "y": [0, 1, 3, 4, 6], "begin": [0, 1, 4, 6], "align": [0, 1, 4, 6], "2": [0, 1, 3, 4, 5, 6, 7], "leq": [0, 5], "end": [0, 1, 4, 6], "hold": 0, "do": [0, 1, 5, 7], "some": [0, 4], "extra": [0, 7], "step": [0, 4], "converg": 0, "again": [0, 1, 5], "consist": 0, "cell": 0, "n": [0, 1, 3, 4, 5, 6], "10000": [0, 3, 5, 6], "pi_estim": 0, "zero": [0, 1, 3], "inside_circl": 0, "arrai": [0, 1, 4, 5], "colour": 0, "outside_circl": 0, "count": 0, "fig": [0, 1, 4, 5, 6], "ax": [0, 1, 4, 5, 6], "subplot": [0, 1, 4, 5, 6], "figsiz": [0, 1, 4, 5, 6], "5": [0, 1, 3, 4, 5, 6], "printindex": 0, "rang": [0, 1, 3, 4, 5], "reason": 0, "next": [0, 4, 6], "week": 0, "append": [0, 4, 5], "axi": [0, 1, 4], "els": 0, "4": [0, 1, 4, 5], "cla": [0, 4, 5], "add_patch": [0, 5], "color": [0, 1, 3, 4, 5, 6], "k": [0, 1, 3, 4, 5, 6], "fill": [0, 1, 5, 6], "fals": [0, 4, 5, 6], "rectangl": [0, 5], "scatter": [0, 1, 3, 5, 6], "s": [0, 1, 3, 4, 5, 6], "8": [0, 1, 3, 4, 5], "c": [0, 1, 4, 6], "set_titl": [0, 1, 4, 5], "sampl": [0, 1, 2, 3, 4, 6, 7], "remov": 0, "box": [0, 1, 3, 5], "around": 0, "xtick": 0, "ytick": 0, "spine": [0, 1], "top": 0, "set_vis": [0, 4], "right": [0, 1, 4, 5, 6], "bottom": 0, "left": [0, 4, 5, 6], "set_xtick": [0, 1, 6], "set_ytick": [0, 1, 6], "set_xlim": [0, 1, 4, 5], "01": [0, 5], "set_ylim": [0, 1, 4, 5], "ones": 0, "lw": [0, 5], "set_xlabel": [0, 1, 4, 6], "show": [0, 1, 3, 4, 5, 6], "delv": 0, "complic": 0, "problem": 0, "how": [0, 1], "visualis": 0, "best": 0, "wai": [0, 1, 5], "repres": 0, "through": [0, 4], "its": 0, "variabl": [0, 1, 4], "mathbb": 0, "p": [0, 3, 4, 5], "quad": [0, 1], "3": [0, 1, 4, 6], "list": 0, "mathsf": [0, 4], "w": [0, 4], "correspond": 0, "stem": [0, 4], "markerfmt": [0, 4], "ko": 0, "linefmt": [0, 4], "stemcontain": 0, "object": 0, "artist": 0, "easili": 0, "cdf": [0, 4], "cumsum": [0, 4], "ro": [0, 4], "drawstyl": [0, 4], "post": [0, 4], "line2d": 0, "0x11f57c370": 0, "chapter": [1, 7], "exact": [1, 7], "mainli": [1, 2], "classifi": [1, 2], "two": [1, 2, 3, 4], "i": [1, 2, 3, 4, 5], "direct": [1, 2], "ii": [1, 2], "reject": [1, 2, 7], "These": [1, 2], "both": [1, 2], "implement": [1, 2, 3, 4, 5, 6], "linear": [1, 3], "congruenti": 1, "lcg": 1, "base": 1, "simul": [1, 3, 5], "recurs": 1, "x_": 1, "1": [1, 3, 4, 5, 6, 7], "equiv": 1, "x_n": 1, "b": [1, 3], "text": [1, 4, 5, 6], "mod": 1, "m": [1, 3, 5], "where": [1, 6], "x_0": 1, "modulu": 1, "shift": 1, "multipli": 1, "an": [1, 4, 7], "integ": 1, "ldot": 1, "u_n": 1, "frac": [1, 4, 6], "foral": 1, "def": [1, 3, 4, 5], "x0": 1, "return": [1, 3, 4, 5], "100000": [1, 3], "106": 1, "1283": 1, "6075": 1, "hist": [1, 3, 4, 5], "bin": [1, 3, 4, 5, 6], "20": [1, 4, 6], "densiti": [1, 3, 4, 5], "true": [1, 3, 4, 5], "Not": 1, "bad": 1, "But": 1, "choos": 1, "enough": 1, "tricki": 1, "anoth": 1, "experi": 1, "2048": 1, "43": 1, "alpha": [1, 3, 4, 5], "histogram": [1, 4, 5, 6], "orang": 1, "u_": 1, "vs": 1, "u_k": 1, "choic": 1, "matter": 1, "look": [1, 3, 4, 6], "almost": 1, "structur": 1, "crucial": 1, "applic": 1, "avoid": 1, "pseudo": 1, "build": 1, "block": 1, "subsequ": 1, "algorithm": 1, "ruin": 1, "gaussian": [1, 3], "futur": 1, "recal": 1, "2d": [1, 6], "cm": 1, "mpl_toolkit": 1, "mplot3d": 1, "axes3d": 1, "stat": 1, "multivariate_norm": 1, "dimension": 1, "over": 1, "60": 1, "linspac": [1, 3, 4, 5], "meshgrid": 1, "mean": 1, "vector": [1, 4], "covari": 1, "matrix": 1, "mu": [1, 3], "sigma": [1, 3], "pack": 1, "singl": 1, "po": 1, "empti": 1, "shape": 1, "f": 1, "z": [1, 3], "pdf": [1, 4], "creat": 1, "surfac": 1, "project": [1, 4], "contour": 1, "under": [1, 5], "first": [1, 3, 4, 5], "add_subplot": 1, "3d": 1, "plot_surfac": 1, "antialias": 1, "cmap": 1, "plasma": 1, "cset": 1, "contourf": 1, "zdir": 1, "offset": 1, "15": [1, 6], "adjust": 1, "limit": 1, "tick": 1, "view": 1, "angl": 1, "set_zlim": 1, "set_ztick": 1, "view_init": 1, "27": 1, "21": 1, "clear": 1, "label": [1, 3], "set_xticklabel": 1, "set_yticklabel": 1, "set_zticklabel": 1, "second": [1, 3], "90": 1, "grid": 1, "w_xaxi": 1, "set_color": 1, "w_yaxi": 1, "w_zaxi": 1, "space": 1, "between": [1, 4], "subplots_adjust": 1, "wspace": 1, "hspace": 1, "tight_layout": [1, 6], "ani": [1, 4, 7], "correct": [1, 4], "data": 1, "come": 1, "should": 1, "particular": 1, "get": 1, "imag": 1, "abov": [1, 4], "hand": 1, "side": 1, "try": 1, "qualiti": 1, "saw": 1, "muller": 1, "which": [1, 4, 5, 7], "introduc": 1, "later": 1, "box_mul": 1, "u1": 1, "u2": 1, "z1": 1, "sqrt": [1, 3, 6], "log": [1, 4], "co": [1, 6], "pi": [1, 3, 6], "z2": 1, "sin": [1, 6], "12": [1, 3, 5], "z_1": 1, "set_ylabel": [1, 6], "z_2": 1, "hist2d": [1, 6], "50": [1, 4, 5, 6], "what": [1, 3, 4, 5, 6], "happen": 1, "horribl": 1, "reflect": [1, 4], "therefor": 1, "custom": 1, "turn": 1, "32": 1, "1664525": 1, "1013904223": 1, "much": 1, "better": 1, "issu": 1, "sort": 1, "alwai": 1, "advis": 1, "built": 1, "name": 1, "needless": 1, "give": [1, 4], "perfect": 1, "too": [1, 3, 5], "invers": [2, 7], "transform": [2, 3, 4, 7], "composit": [2, 7], "continu": [3, 4, 5, 6], "13": 3, "compar": 3, "procedur": 3, "sim": [3, 4, 5, 6], "mathcal": 3, "By": 3, "analyt": 3, "must": 3, "match": 3, "normal": [3, 4], "take": 3, "standard": 3, "deviat": 3, "argument": 3, "uller": 3, "marginal_i": 3, "exp": [3, 4, 5, 6], "yy": 3, "7": [3, 4, 5], "1000": [3, 5], "100": [3, 4, 5], "black": 3, "legend": [3, 5], "14": 3, "regress": 3, "model": 3, "sigma_0": 3, "varianc": 3, "05": 3, "paus": 3, "think": 4, "practic": 4, "set": 4, "probabl": 4, "mass": 4, "bmatrix": 4, "pmf": 4, "discrete_cdf": 4, "cw": 4, "plot_discrete_cdf": 4, "o": 4, "anim": [4, 5], "inlin": 4, "sampler": [4, 5], "weight": 4, "sample_ind": 4, "argmax": 4, "2000": 4, "un": 4, "sample_x": 4, "rest": 4, "chang": 4, "marker": 4, "markerlin": 4, "stemlin": 4, "baselin": 4, "r": [4, 6], "center": 4, "mid": 4, "width": 4, "6": [4, 6], "process": [4, 5], "hidden": 4, "lot": 4, "divers": 4, "sake": 4, "feel": 4, "free": 4, "expand": 4, "curiou": 4, "notebook": [4, 5], "funcanim": 4, "ipython": 4, "displai": 4, "html": 4, "200": 4, "updat": 4, "cumul": 4, "linestyl": 4, "none": 4, "markers": 4, "frame": 4, "repeat": 4, "to_jshtml": 4, "onc": [4, 5], "loop": [4, 5], "Of": 4, "generalis": 4, "deriv": 4, "exponenti": [4, 5, 6], "lambda": [4, 5], "e": 4, "calcul": 4, "f_x": 4, "int_": 4, "mathrm": 4, "d": 4, "int_0": 4, "_": 4, "impli": 4, "u_i": 4, "unif": [4, 5, 6], "x_i": 4, "exponential_pdf": 4, "lam": [4, 5], "exponential_cdf": 4, "illustr": 4, "paramet": 4, "50000": 4, "xx": [4, 5], "linewidth": [4, 5], "width_ratio": [4, 5], "height_ratio": [4, 5], "dash": 4, "parallel": 4, "orient": 4, "horizont": 4, "invert_xaxi": 4, "One": [4, 5], "go": 4, "eventu": 4, "becom": 4, "A": 4, "here": 5, "describ": 5, "beta": 5, "beta_pdf": 5, "math": 5, "gamma": 5, "readi": 5, "shown": 5, "fundament": 5, "theorem": 5, "know": [5, 7], "star": 5, "maximum": 5, "order": 5, "curv": 5, "uniformli": 5, "p_star": 5, "5000": 5, "done": 5, "all": 5, "acc_sampl": 5, "acc_u": 5, "store": 5, "ft": 5, "On": 5, "valu": 5, "costli": 5, "provid": 5, "gamma_dens": 5, "factori": 5, "exponential_dens": 5, "gamma_rejection_sampl": 5, "acc": 5, "x_prime": 5, "lam_1": 5, "x_lam_1": 5, "acc_rate_1": 5, "lam_2": 5, "x_lam_2": 5, "acc_rate_2": 5, "001": 5, "q_": 5, "optim": 5, "rate": 5, "str": 5, "x_1": 6, "x_2": 6, "y_1": 6, "y_2": 6, "123": 6, "1000000": 6, "xlabel": 6, "ylabel": 6, "theta": 6, "x1": 6, "y1": 6, "x2": 6, "y2": 6, "x3": 6, "y3": 6, "unit": 6, "within": 6, "add_artist": 6, "fontsiz": 6, "x_3": 6, "y_3": 6, "onlin": 7, "companion": 7, "featur": 7, "explan": 7, "avail": 7, "blackboard": 7, "differ": 7, "than": 7, "last": 7, "year": 7, "pleas": 7, "old": 7, "progress": 7, "If": 7, "find": 7, "error": 7, "introduct": 7, "variat": 7}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"chapter": [0, 2], "1": 0, "introduct": 0, "estim": 0, "pi": 0, "discret": [0, 4], "probabl": 0, "comput": 0, "uniform": 1, "random": [1, 2], "variat": [1, 2], "gener": [1, 2], "2": 2, "exact": 2, "composit": 3, "invers": 4, "distribut": 4, "reject": 5, "sampl": 5, "transform": 6, "method": 6, "welcom": 7, "stochast": 7, "simul": 7, "tabl": 7, "content": 7}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})