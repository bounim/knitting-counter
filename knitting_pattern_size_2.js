const TECHNICAL_GLOSSARY = {
  "sl1wyo": "⋆ slip 1 with yarn over (to create the turn stitch for german short rows)",
  "k2tog": "⋆ knit the next 2 sts together",
  "ssk": "⋆ slip 1 st knit wise, slip the next st knit wise, put the 2 sts back on left needle and k2tog tbl",
  "tbl": "⋆ through the back loop",
  "m1l": "⋆ front to back, knit the strand tbl",
  "m1r": "⋆ back to front, knit the strand",
  "m1pl": "⋆ front to back, purl the strand tbl",
  "m1pr": "⋆ back to front, purl the strand",
  "sl": "⋆ slip",
  "wyif": "⋆ with yarn in front",
  "rs": "⋆ right side",
  "ws": "⋆ wrong side",
  "pm": "⋆ place marker",
  "pxm": "⋆ place x-marker",
  "sm": "⋆ slip marker",
  "sxm": "⋆ slip x-marker"
};

const TRICOT_INSTRUCTIONS = [
  [
    "Knit to 1st marker",
    "SM",
    "m1l",
    "knit 30 sts",
    "PXM",
    "knit 15 sts",
    "PXM",
    "knit to 2nd marker",
    "m1r",
    "SM",
    "knit to 3rd marker",
    "SM",
    "m1l",
    "knit to end of round",
    "m1r",
    "Total: 186 | Dos: 77 | Devant: 77 | Epaules: 16"
  ],
  [
    "Knit to 1st marker",
    "SM",
    "m1l",
    "knit to 1st x-marker",
    "m1r",
    "SXM",
    "ssk",
    "knit until 2 sts before 2nd x-marker",
    "k2tog",
    "SXM",
    "m1l",
    "knit to 2nd marker",
    "m1r",
    "SM",
    "knit to 3rd marker",
    "SM",
    "m1l",
    "knit to end of round",
    "m1r",
    "Total: 190 | Dos: 79 | Devant: 79 | Epaules: 16"
  ],
  [
    "Knit to 1st marker",
    "SM",
    "m1l",
    "knit to 1st x-marker",
    "SXM",
    "sl1",
    "knit until 1 st before 2nd x-marker",
    "sl1",
    "SXM",
    "knit to 2nd marker",
    "m1r",
    "SM",
    "knit to 3rd marker",
    "SM",
    "m1l",
    "knit to end of round",
    "m1r",
    "Total: 194 | Dos: 81 | Devant: 81 | Epaules: 16"
  ],
  [
    "Knit to 1st marker",
    "SM",
    "m1l",
    "knit to 1st x-marker",
    "m1r",
    "SXM",
    "ssk",
    "knit until 2 sts before 2nd x-marker",
    "k2tog",
    "SXM",
    "m1l",
    "knit to 2nd marker",
    "m1r",
    "SM",
    "knit to 3rd marker",
    "SM",
    "m1l",
    "knit to end of round",
    "m1r",
    "Total: 198 | Dos: 83 | Devant: 83 | Epaules: 16"
  ],
  [
    "Knit to 1st marker",
    "SM",
    "m1l",
    "knit to 1st x-marker",
    "SXM",
    "sl1",
    "knit until 1 st before 2nd x-marker",
    "sl1",
    "SXM",
    "knit to 2nd marker",
    "m1r",
    "SM",
    "knit to 3rd marker",
    "SM",
    "m1l",
    "knit to end of round",
    "m1r",
    "Total: 202 | Dos: 85 | Devant: 85 | Epaules: 16"
  ],
  [
    "Knit to 1st marker",
    "SM",
    "m1l",
    "knit to 1st x-marker",
    "m1r",
    "SXM",
    "ssk",
    "knit until 2 sts before 2nd x-marker",
    "k2tog",
    "SXM",
    "m1l",
    "knit to 2nd marker",
    "m1r",
    "SM",
    "knit to 3rd marker",
    "SM",
    "m1l",
    "knit to end of round",
    "m1r",
    "Total: 206 | Dos: 87 | Devant: 87 | Epaules: 16"
  ],
  [
    "Knit to 1st x-marker",
    "SXM",
    "sl1",
    "knit until 1 st before 2nd x-marker",
    "sl1",
    "SXM",
    "knit to end of round",
    "Total: 206 | Dos: 87 | Devant: 87 | Epaules: 16"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "knit to 1st x-marker",
    "m1r",
    "SXM",
    "ssk",
    "knit until 2 sts before 2nd x-marker",
    "k2tog",
    "SXM",
    "m1l",
    "knit to 2nd marker",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "knit to end of round",
    "Total: 210 | Dos: 87 | Devant: 87 | Epaules: 18"
  ],
  [
    "Knit to 1st x-marker",
    "SXM",
    "sl1",
    "knit until 1 st before 2nd x-marker",
    "sl1",
    "SXM",
    "knit to end of round",
    "Total: 210 | Dos: 87 | Devant: 87 | Epaules: 18"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "knit to 1st x-marker",
    "m1r",
    "SXM",
    "ssk",
    "knit until 2 sts before 2nd x-marker",
    "k2tog",
    "SXM",
    "m1l",
    "knit to 2nd marker",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "knit to end of round",
    "Total: 214 | Dos: 87 | Devant: 87 | Epaules: 20"
  ],
  [
    "Knit to 1st x-marker",
    "SXM",
    "sl1",
    "knit until 1 st before 2nd x-marker",
    "sl1",
    "SXM",
    "knit to end of round",
    "Total: 214 | Dos: 87 | Devant: 87 | Epaules: 20"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "knit to 1st x-marker",
    "m1r",
    "SXM",
    "ssk",
    "knit until 2 sts before 2nd x-marker",
    "k2tog",
    "SXM",
    "m1l",
    "knit to 2nd marker",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "knit to end of round",
    "Total: 218 | Dos: 87 | Devant: 87 | Epaules: 22"
  ],
  [
    "Knit to 1st x-marker",
    "SXM",
    "sl1",
    "knit until 1 st before 2nd x-marker",
    "sl1",
    "SXM",
    "knit to end of round",
    "Total: 218 | Dos: 87 | Devant: 87 | Epaules: 22"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "knit to 1st x-marker",
    "remove 1st x-marker",
    "place next 2 sts onto cable needle in back",
    "k1",
    "SXM",
    "put 2nd st on cable needle back onto left needle",
    "place cable needle in front",
    "k1",
    "PXM",
    "put 1st st on cable needle back onto left needle",
    "k1",
    "knit to 2nd marker",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "knit to end of round",
    "Total: 222 | Dos: 87 | Devant: 87 | Epaules: 24"
  ],
  [
    "Knit until 1 st before 1st x-marker",
    "sl1",
    "SXM",
    "knit to 2nd x-marker",
    "SXM",
    "sl1",
    "knit to end of round",
    "Total: 222 | Dos: 87 | Devant: 87 | Epaules: 24"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "knit until 2 sts before 1st x-marker",
    "k2tog",
    "SXM",
    "m1l",
    "knit to 2nd x-marker",
    "m1r",
    "SXM",
    "ssk",
    "knit to 2nd marker",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "knit to end of round",
    "Total: 226 | Dos: 87 | Devant: 87 | Epaules: 26"
  ],
  [
    "Knit until 1 st before 1st x-marker",
    "sl1",
    "SXM",
    "knit to 2nd x-marker",
    "SXM",
    "sl1",
    "knit to end of round",
    "Total: 226 | Dos: 87 | Devant: 87 | Epaules: 26"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "knit until 2 sts before 1st x-marker",
    "k2tog",
    "SXM",
    "m1l",
    "knit to 2nd x-marker",
    "m1r",
    "SXM",
    "ssk",
    "knit to 2nd marker",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "knit to end of round",
    "Total: 230 | Dos: 87 | Devant: 87 | Epaules: 28"
  ],
  [
    "Knit until 1 st before 1st x-marker",
    "sl1",
    "SXM",
    "knit to 2nd x-marker",
    "SXM",
    "sl1",
    "knit to end of round",
    "Total: 230 | Dos: 87 | Devant: 87 | Epaules: 28"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "knit until 2 sts before 1st x-marker",
    "k2tog",
    "SXM",
    "m1l",
    "knit to 2nd x-marker",
    "m1r",
    "SXM",
    "ssk",
    "knit to 2nd marker",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "knit to end of round",
    "Total: 234 | Dos: 87 | Devant: 87 | Epaules: 30"
  ],
  [
    "Knit to end of round",
    "Total: 234 | Dos: 87 | Devant: 87 | Epaules: 30"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "knit to 2nd marker",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "knit to end of round",
    "Total: 238 | Dos: 87 | Devant: 87 | Epaules: 32"
  ],
  [
    "Knit to end of round",
    "Total: 238 | Dos: 87 | Devant: 87 | Epaules: 32"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "knit to 2nd marker",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "knit to end of round",
    "Total: 242 | Dos: 87 | Devant: 87 | Epaules: 34"
  ],
  [
    "Knit to end of round",
    "Total: 242 | Dos: 87 | Devant: 87 | Epaules: 34"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "knit to 2nd marker",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "knit to end of round",
    "Total: 246 | Dos: 87 | Devant: 87 | Epaules: 36"
  ],
  [
    "Knit to end of round",
    "Total: 246 | Dos: 87 | Devant: 87 | Epaules: 36"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "knit to 2nd marker",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "knit to end of round",
    "Total: 250 | Dos: 87 | Devant: 87 | Epaules: 38"
  ],
  [
    "Knit to end of round",
    "Total: 250 | Dos: 87 | Devant: 87 | Epaules: 38"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "knit to 2nd marker",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "knit to end of round",
    "Total: 254 | Dos: 87 | Devant: 87 | Epaules: 40"
  ],
  [
    "Knit to end of round",
    "Total: 254 | Dos: 87 | Devant: 87 | Epaules: 40"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "knit to 2nd marker",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "knit to end of round",
    "Total: 258 | Dos: 87 | Devant: 87 | Epaules: 42"
  ],
  [
    "Knit to end of round",
    "Total: 258 | Dos: 87 | Devant: 87 | Epaules: 42"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before 2nd marker",
    "m1r",
    "k3",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before end of round",
    "m1r",
    "k3",
    "Total: 266 | Dos: 89 | Devant: 89 | Epaules: 44"
  ],
  [
    "Knit to end of round",
    "Total: 266 | Dos: 89 | Devant: 89 | Epaules: 44"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before 2nd marker",
    "m1r",
    "k3",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before end of round",
    "m1r",
    "k3",
    "Total: 274 | Dos: 91 | Devant: 91 | Epaules: 46"
  ],
  [
    "Knit to end of round",
    "Total: 274 | Dos: 91 | Devant: 91 | Epaules: 46"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before 2nd marker",
    "m1r",
    "k3",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before end of round",
    "m1r",
    "k3",
    "Total: 282 | Dos: 93 | Devant: 93 | Epaules: 48"
  ],
  [
    "Knit to end of round",
    "Total: 282 | Dos: 93 | Devant: 93 | Epaules: 48"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before 2nd marker",
    "m1r",
    "k3",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before end of round",
    "m1r",
    "k3",
    "Total: 290 | Dos: 95 | Devant: 95 | Epaules: 50"
  ],
  [
    "Knit to end of round",
    "Total: 290 | Dos: 95 | Devant: 95 | Epaules: 50"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before 2nd marker",
    "m1r",
    "k3",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before end of round",
    "m1r",
    "k3",
    "Total: 298 | Dos: 97 | Devant: 97 | Epaules: 52"
  ],
  [
    "Knit to end of round",
    "Total: 298 | Dos: 97 | Devant: 97 | Epaules: 52"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before 2nd marker",
    "m1r",
    "k3",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before end of round",
    "m1r",
    "k3",
    "Total: 306 | Dos: 99 | Devant: 99 | Epaules: 54"
  ],
  [
    "Knit to end of round",
    "Total: 306 | Dos: 99 | Devant: 99 | Epaules: 54"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before 2nd marker",
    "m1r",
    "k3",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before end of round",
    "m1r",
    "k3",
    "Total: 314 | Dos: 101 | Devant: 101 | Epaules: 56"
  ],
  [
    "Knit to end of round",
    "Total: 314 | Dos: 101 | Devant: 101 | Epaules: 56"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before 2nd marker",
    "m1r",
    "k3",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before end of round",
    "m1r",
    "k3",
    "Total: 322 | Dos: 103 | Devant: 103 | Epaules: 58"
  ],
  [
    "Knit to end of round",
    "Total: 322 | Dos: 103 | Devant: 103 | Epaules: 58"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before 2nd marker",
    "m1r",
    "k3",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before end of round",
    "m1r",
    "k3",
    "Total: 330 | Dos: 105 | Devant: 105 | Epaules: 60"
  ],
  [
    "Knit to end of round",
    "Total: 330 | Dos: 105 | Devant: 105 | Epaules: 60"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before 2nd marker",
    "m1r",
    "k3",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before end of round",
    "m1r",
    "k3",
    "Total: 338 | Dos: 107 | Devant: 107 | Epaules: 62"
  ],
  [
    "Knit to end of round",
    "Total: 338 | Dos: 107 | Devant: 107 | Epaules: 62"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before 2nd marker",
    "m1r",
    "k3",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before end of round",
    "m1r",
    "k3",
    "Total: 346 | Dos: 109 | Devant: 109 | Epaules: 64"
  ],
  [
    "Knit to end of round",
    "Total: 346 | Dos: 109 | Devant: 109 | Epaules: 64"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before 2nd marker",
    "m1r",
    "k3",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before end of round",
    "m1r",
    "k3",
    "Total: 354 | Dos: 111 | Devant: 111 | Epaules: 66"
  ],
  [
    "Knit to end of round",
    "Total: 354 | Dos: 111 | Devant: 111 | Epaules: 66"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before 2nd marker",
    "m1r",
    "k3",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before end of round",
    "m1r",
    "k3",
    "Total: 362 | Dos: 113 | Devant: 113 | Epaules: 68"
  ],
  [
    "Knit to end of round",
    "Total: 362 | Dos: 113 | Devant: 113 | Epaules: 68"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before 2nd marker",
    "m1r",
    "k3",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before end of round",
    "m1r",
    "k3",
    "Total: 370 | Dos: 115 | Devant: 115 | Epaules: 70"
  ],
  [
    "Knit to end of round",
    "Total: 370 | Dos: 115 | Devant: 115 | Epaules: 70"
  ],
  [
    "m1l",
    "knit to 1st marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before 2nd marker",
    "m1r",
    "k3",
    "SM",
    "m1l",
    "knit to 3rd marker",
    "m1r",
    "SM",
    "k3",
    "m1l",
    "knit until 3 sts before end of round",
    "m1r",
    "k3",
    "Total: 378 | Dos: 117 | Devant: 117 | Epaules: 72"
  ],
  [
    "Knit to end of round",
    "Total: 378 | Dos: 117 | Devant: 117 | Epaules: 72"
  ],
  [
    "Put 72 sts on hold",
    "remove 1st marker",
    "cast on 8 sts",
    "knit until 2nd marker",
    "remove 2nd marker",
    "put 72 sts on hold",
    "cast on 8 sts",
    "remove 3rd marker",
    "knit until end of round",
    "Total: 250 | Dos: 125 | Devant: 125 | Epaules: 0"
  ],
  [
    "Knit in the round until body measures 35-40 cm from bottom of armhole",
    "Total: 250 | Dos: 125 | Devant: 125 | Epaules: 0"
  ],
  [
    "Knit 1 rnd tbl",
    "Total: 250 | Dos: 125 | Devant: 125 | Epaules: 0"
  ],
  [
    "Bind off all sts by knitting them tbl",
    "Total: 0 | Dos: 0 | Devant: 0 | Epaules: 0"
  ],
  [
    "[Left Sleeve] Put 72 held sts back onto working needle",
    "start at center of bottom of armhole",
    "pick up and knit 4 sts along bottom of armhole",
    "pick up and knit 1 st in gap before sleeve sts",
    "knit 72 sleeve sts",
    "pick up and knit 1 st in gap before bottom of armhole",
    "pick up and knit 4 sts along bottom of armhole",
    "PM for beginning/end of round",
    "Total: 82 | Dos: 0 | Devant: 0 | Epaules: 82"
  ],
  [
    "[Left Sleeve] Knit 4 sts tbl",
    "sl1 knit wise and put back on left needle",
    "k2tog",
    "knit until 6 sts left",
    "sl1 knit wise and put back on left needle",
    "k2tog tbl",
    "knit 4 sts tbl",
    "Total: 80 | Dos: 0 | Devant: 0 | Epaules: 80"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 1/14, Row 1/9)",
    "Total: 80 | Dos: 0 | Devant: 0 | Epaules: 80"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 1/14, Row 2/9)",
    "Total: 80 | Dos: 0 | Devant: 0 | Epaules: 80"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 1/14, Row 3/9)",
    "Total: 80 | Dos: 0 | Devant: 0 | Epaules: 80"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 1/14, Row 4/9)",
    "Total: 80 | Dos: 0 | Devant: 0 | Epaules: 80"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 1/14, Row 5/9)",
    "Total: 80 | Dos: 0 | Devant: 0 | Epaules: 80"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 1/14, Row 6/9)",
    "Total: 80 | Dos: 0 | Devant: 0 | Epaules: 80"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 1/14, Row 7/9)",
    "Total: 80 | Dos: 0 | Devant: 0 | Epaules: 80"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 1/14, Row 8/9)",
    "Total: 80 | Dos: 0 | Devant: 0 | Epaules: 80"
  ],
  [
    "[Left Sleeve] dec-Rnd (1/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 78 | Dos: 0 | Devant: 0 | Epaules: 78"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 2/14, Row 1/9)",
    "Total: 78 | Dos: 0 | Devant: 0 | Epaules: 78"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 2/14, Row 2/9)",
    "Total: 78 | Dos: 0 | Devant: 0 | Epaules: 78"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 2/14, Row 3/9)",
    "Total: 78 | Dos: 0 | Devant: 0 | Epaules: 78"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 2/14, Row 4/9)",
    "Total: 78 | Dos: 0 | Devant: 0 | Epaules: 78"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 2/14, Row 5/9)",
    "Total: 78 | Dos: 0 | Devant: 0 | Epaules: 78"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 2/14, Row 6/9)",
    "Total: 78 | Dos: 0 | Devant: 0 | Epaules: 78"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 2/14, Row 7/9)",
    "Total: 78 | Dos: 0 | Devant: 0 | Epaules: 78"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 2/14, Row 8/9)",
    "Total: 78 | Dos: 0 | Devant: 0 | Epaules: 78"
  ],
  [
    "[Left Sleeve] dec-Rnd (2/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 76 | Dos: 0 | Devant: 0 | Epaules: 76"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 3/14, Row 1/9)",
    "Total: 76 | Dos: 0 | Devant: 0 | Epaules: 76"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 3/14, Row 2/9)",
    "Total: 76 | Dos: 0 | Devant: 0 | Epaules: 76"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 3/14, Row 3/9)",
    "Total: 76 | Dos: 0 | Devant: 0 | Epaules: 76"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 3/14, Row 4/9)",
    "Total: 76 | Dos: 0 | Devant: 0 | Epaules: 76"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 3/14, Row 5/9)",
    "Total: 76 | Dos: 0 | Devant: 0 | Epaules: 76"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 3/14, Row 6/9)",
    "Total: 76 | Dos: 0 | Devant: 0 | Epaules: 76"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 3/14, Row 7/9)",
    "Total: 76 | Dos: 0 | Devant: 0 | Epaules: 76"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 3/14, Row 8/9)",
    "Total: 76 | Dos: 0 | Devant: 0 | Epaules: 76"
  ],
  [
    "[Left Sleeve] dec-Rnd (3/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 74 | Dos: 0 | Devant: 0 | Epaules: 74"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 4/14, Row 1/9)",
    "Total: 74 | Dos: 0 | Devant: 0 | Epaules: 74"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 4/14, Row 2/9)",
    "Total: 74 | Dos: 0 | Devant: 0 | Epaules: 74"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 4/14, Row 3/9)",
    "Total: 74 | Dos: 0 | Devant: 0 | Epaules: 74"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 4/14, Row 4/9)",
    "Total: 74 | Dos: 0 | Devant: 0 | Epaules: 74"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 4/14, Row 5/9)",
    "Total: 74 | Dos: 0 | Devant: 0 | Epaules: 74"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 4/14, Row 6/9)",
    "Total: 74 | Dos: 0 | Devant: 0 | Epaules: 74"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 4/14, Row 7/9)",
    "Total: 74 | Dos: 0 | Devant: 0 | Epaules: 74"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 4/14, Row 8/9)",
    "Total: 74 | Dos: 0 | Devant: 0 | Epaules: 74"
  ],
  [
    "[Left Sleeve] dec-Rnd (4/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 72 | Dos: 0 | Devant: 0 | Epaules: 72"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 5/14, Row 1/9)",
    "Total: 72 | Dos: 0 | Devant: 0 | Epaules: 72"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 5/14, Row 2/9)",
    "Total: 72 | Dos: 0 | Devant: 0 | Epaules: 72"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 5/14, Row 3/9)",
    "Total: 72 | Dos: 0 | Devant: 0 | Epaules: 72"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 5/14, Row 4/9)",
    "Total: 72 | Dos: 0 | Devant: 0 | Epaules: 72"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 5/14, Row 5/9)",
    "Total: 72 | Dos: 0 | Devant: 0 | Epaules: 72"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 5/14, Row 6/9)",
    "Total: 72 | Dos: 0 | Devant: 0 | Epaules: 72"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 5/14, Row 7/9)",
    "Total: 72 | Dos: 0 | Devant: 0 | Epaules: 72"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 5/14, Row 8/9)",
    "Total: 72 | Dos: 0 | Devant: 0 | Epaules: 72"
  ],
  [
    "[Left Sleeve] dec-Rnd (5/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 70 | Dos: 0 | Devant: 0 | Epaules: 70"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 6/14, Row 1/9)",
    "Total: 70 | Dos: 0 | Devant: 0 | Epaules: 70"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 6/14, Row 2/9)",
    "Total: 70 | Dos: 0 | Devant: 0 | Epaules: 70"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 6/14, Row 3/9)",
    "Total: 70 | Dos: 0 | Devant: 0 | Epaules: 70"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 6/14, Row 4/9)",
    "Total: 70 | Dos: 0 | Devant: 0 | Epaules: 70"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 6/14, Row 5/9)",
    "Total: 70 | Dos: 0 | Devant: 0 | Epaules: 70"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 6/14, Row 6/9)",
    "Total: 70 | Dos: 0 | Devant: 0 | Epaules: 70"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 6/14, Row 7/9)",
    "Total: 70 | Dos: 0 | Devant: 0 | Epaules: 70"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 6/14, Row 8/9)",
    "Total: 70 | Dos: 0 | Devant: 0 | Epaules: 70"
  ],
  [
    "[Left Sleeve] dec-Rnd (6/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 68 | Dos: 0 | Devant: 0 | Epaules: 68"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 7/14, Row 1/9)",
    "Total: 68 | Dos: 0 | Devant: 0 | Epaules: 68"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 7/14, Row 2/9)",
    "Total: 68 | Dos: 0 | Devant: 0 | Epaules: 68"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 7/14, Row 3/9)",
    "Total: 68 | Dos: 0 | Devant: 0 | Epaules: 68"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 7/14, Row 4/9)",
    "Total: 68 | Dos: 0 | Devant: 0 | Epaules: 68"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 7/14, Row 5/9)",
    "Total: 68 | Dos: 0 | Devant: 0 | Epaules: 68"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 7/14, Row 6/9)",
    "Total: 68 | Dos: 0 | Devant: 0 | Epaules: 68"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 7/14, Row 7/9)",
    "Total: 68 | Dos: 0 | Devant: 0 | Epaules: 68"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 7/14, Row 8/9)",
    "Total: 68 | Dos: 0 | Devant: 0 | Epaules: 68"
  ],
  [
    "[Left Sleeve] dec-Rnd (7/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 66 | Dos: 0 | Devant: 0 | Epaules: 66"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 8/14, Row 1/9)",
    "Total: 66 | Dos: 0 | Devant: 0 | Epaules: 66"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 8/14, Row 2/9)",
    "Total: 66 | Dos: 0 | Devant: 0 | Epaules: 66"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 8/14, Row 3/9)",
    "Total: 66 | Dos: 0 | Devant: 0 | Epaules: 66"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 8/14, Row 4/9)",
    "Total: 66 | Dos: 0 | Devant: 0 | Epaules: 66"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 8/14, Row 5/9)",
    "Total: 66 | Dos: 0 | Devant: 0 | Epaules: 66"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 8/14, Row 6/9)",
    "Total: 66 | Dos: 0 | Devant: 0 | Epaules: 66"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 8/14, Row 7/9)",
    "Total: 66 | Dos: 0 | Devant: 0 | Epaules: 66"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 8/14, Row 8/9)",
    "Total: 66 | Dos: 0 | Devant: 0 | Epaules: 66"
  ],
  [
    "[Left Sleeve] dec-Rnd (8/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 64 | Dos: 0 | Devant: 0 | Epaules: 64"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 9/14, Row 1/9)",
    "Total: 64 | Dos: 0 | Devant: 0 | Epaules: 64"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 9/14, Row 2/9)",
    "Total: 64 | Dos: 0 | Devant: 0 | Epaules: 64"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 9/14, Row 3/9)",
    "Total: 64 | Dos: 0 | Devant: 0 | Epaules: 64"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 9/14, Row 4/9)",
    "Total: 64 | Dos: 0 | Devant: 0 | Epaules: 64"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 9/14, Row 5/9)",
    "Total: 64 | Dos: 0 | Devant: 0 | Epaules: 64"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 9/14, Row 6/9)",
    "Total: 64 | Dos: 0 | Devant: 0 | Epaules: 64"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 9/14, Row 7/9)",
    "Total: 64 | Dos: 0 | Devant: 0 | Epaules: 64"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 9/14, Row 8/9)",
    "Total: 64 | Dos: 0 | Devant: 0 | Epaules: 64"
  ],
  [
    "[Left Sleeve] dec-Rnd (9/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 62 | Dos: 0 | Devant: 0 | Epaules: 62"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 10/14, Row 1/9)",
    "Total: 62 | Dos: 0 | Devant: 0 | Epaules: 62"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 10/14, Row 2/9)",
    "Total: 62 | Dos: 0 | Devant: 0 | Epaules: 62"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 10/14, Row 3/9)",
    "Total: 62 | Dos: 0 | Devant: 0 | Epaules: 62"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 10/14, Row 4/9)",
    "Total: 62 | Dos: 0 | Devant: 0 | Epaules: 62"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 10/14, Row 5/9)",
    "Total: 62 | Dos: 0 | Devant: 0 | Epaules: 62"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 10/14, Row 6/9)",
    "Total: 62 | Dos: 0 | Devant: 0 | Epaules: 62"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 10/14, Row 7/9)",
    "Total: 62 | Dos: 0 | Devant: 0 | Epaules: 62"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 10/14, Row 8/9)",
    "Total: 62 | Dos: 0 | Devant: 0 | Epaules: 62"
  ],
  [
    "[Left Sleeve] dec-Rnd (10/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 60 | Dos: 0 | Devant: 0 | Epaules: 60"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 11/14, Row 1/9)",
    "Total: 60 | Dos: 0 | Devant: 0 | Epaules: 60"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 11/14, Row 2/9)",
    "Total: 60 | Dos: 0 | Devant: 0 | Epaules: 60"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 11/14, Row 3/9)",
    "Total: 60 | Dos: 0 | Devant: 0 | Epaules: 60"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 11/14, Row 4/9)",
    "Total: 60 | Dos: 0 | Devant: 0 | Epaules: 60"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 11/14, Row 5/9)",
    "Total: 60 | Dos: 0 | Devant: 0 | Epaules: 60"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 11/14, Row 6/9)",
    "Total: 60 | Dos: 0 | Devant: 0 | Epaules: 60"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 11/14, Row 7/9)",
    "Total: 60 | Dos: 0 | Devant: 0 | Epaules: 60"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 11/14, Row 8/9)",
    "Total: 60 | Dos: 0 | Devant: 0 | Epaules: 60"
  ],
  [
    "[Left Sleeve] dec-Rnd (11/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 58 | Dos: 0 | Devant: 0 | Epaules: 58"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 12/14, Row 1/9)",
    "Total: 58 | Dos: 0 | Devant: 0 | Epaules: 58"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 12/14, Row 2/9)",
    "Total: 58 | Dos: 0 | Devant: 0 | Epaules: 58"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 12/14, Row 3/9)",
    "Total: 58 | Dos: 0 | Devant: 0 | Epaules: 58"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 12/14, Row 4/9)",
    "Total: 58 | Dos: 0 | Devant: 0 | Epaules: 58"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 12/14, Row 5/9)",
    "Total: 58 | Dos: 0 | Devant: 0 | Epaules: 58"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 12/14, Row 6/9)",
    "Total: 58 | Dos: 0 | Devant: 0 | Epaules: 58"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 12/14, Row 7/9)",
    "Total: 58 | Dos: 0 | Devant: 0 | Epaules: 58"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 12/14, Row 8/9)",
    "Total: 58 | Dos: 0 | Devant: 0 | Epaules: 58"
  ],
  [
    "[Left Sleeve] dec-Rnd (12/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 56 | Dos: 0 | Devant: 0 | Epaules: 56"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 13/14, Row 1/9)",
    "Total: 56 | Dos: 0 | Devant: 0 | Epaules: 56"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 13/14, Row 2/9)",
    "Total: 56 | Dos: 0 | Devant: 0 | Epaules: 56"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 13/14, Row 3/9)",
    "Total: 56 | Dos: 0 | Devant: 0 | Epaules: 56"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 13/14, Row 4/9)",
    "Total: 56 | Dos: 0 | Devant: 0 | Epaules: 56"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 13/14, Row 5/9)",
    "Total: 56 | Dos: 0 | Devant: 0 | Epaules: 56"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 13/14, Row 6/9)",
    "Total: 56 | Dos: 0 | Devant: 0 | Epaules: 56"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 13/14, Row 7/9)",
    "Total: 56 | Dos: 0 | Devant: 0 | Epaules: 56"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 13/14, Row 8/9)",
    "Total: 56 | Dos: 0 | Devant: 0 | Epaules: 56"
  ],
  [
    "[Left Sleeve] dec-Rnd (13/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 54 | Dos: 0 | Devant: 0 | Epaules: 54"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 14/14, Row 1/9)",
    "Total: 54 | Dos: 0 | Devant: 0 | Epaules: 54"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 14/14, Row 2/9)",
    "Total: 54 | Dos: 0 | Devant: 0 | Epaules: 54"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 14/14, Row 3/9)",
    "Total: 54 | Dos: 0 | Devant: 0 | Epaules: 54"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 14/14, Row 4/9)",
    "Total: 54 | Dos: 0 | Devant: 0 | Epaules: 54"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 14/14, Row 5/9)",
    "Total: 54 | Dos: 0 | Devant: 0 | Epaules: 54"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 14/14, Row 6/9)",
    "Total: 54 | Dos: 0 | Devant: 0 | Epaules: 54"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 14/14, Row 7/9)",
    "Total: 54 | Dos: 0 | Devant: 0 | Epaules: 54"
  ],
  [
    "[Left Sleeve] Knit to end of round (Cycle 14/14, Row 8/9)",
    "Total: 54 | Dos: 0 | Devant: 0 | Epaules: 54"
  ],
  [
    "[Left Sleeve] dec-Rnd (14/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 52 | Dos: 0 | Devant: 0 | Epaules: 52"
  ],
  [
    "[Left Sleeve] Continue to knit in the round without decreases until sleeve measures 52-56 cm",
    "Total: 52 | Dos: 0 | Devant: 0 | Epaules: 52"
  ],
  [
    "[Left Sleeve] Knit 1 rnd tbl",
    "Total: 52 | Dos: 0 | Devant: 0 | Epaules: 52"
  ],
  [
    "[Left Sleeve] Bind off all sts by knitting them tbl",
    "Total: 0 | Dos: 0 | Devant: 0 | Epaules: 0"
  ],
  [
    "[Right Sleeve] Put 72 held sts back onto working needle",
    "start at center of bottom of armhole",
    "pick up and knit 4 sts along bottom of armhole",
    "pick up and knit 1 st in gap before sleeve sts",
    "knit 72 sleeve sts",
    "pick up and knit 1 st in gap before bottom of armhole",
    "pick up and knit 4 sts along bottom of armhole",
    "PM for beginning/end of round",
    "Total: 82 | Dos: 0 | Devant: 0 | Epaules: 82"
  ],
  [
    "[Right Sleeve] Knit 4 sts tbl",
    "sl1 knit wise and put back on left needle",
    "k2tog",
    "knit until 6 sts left",
    "sl1 knit wise and put back on left needle",
    "k2tog tbl",
    "knit 4 sts tbl",
    "Total: 80 | Dos: 0 | Devant: 0 | Epaules: 80"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 1/14, Row 1/9)",
    "Total: 80 | Dos: 0 | Devant: 0 | Epaules: 80"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 1/14, Row 2/9)",
    "Total: 80 | Dos: 0 | Devant: 0 | Epaules: 80"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 1/14, Row 3/9)",
    "Total: 80 | Dos: 0 | Devant: 0 | Epaules: 80"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 1/14, Row 4/9)",
    "Total: 80 | Dos: 0 | Devant: 0 | Epaules: 80"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 1/14, Row 5/9)",
    "Total: 80 | Dos: 0 | Devant: 0 | Epaules: 80"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 1/14, Row 6/9)",
    "Total: 80 | Dos: 0 | Devant: 0 | Epaules: 80"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 1/14, Row 7/9)",
    "Total: 80 | Dos: 0 | Devant: 0 | Epaules: 80"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 1/14, Row 8/9)",
    "Total: 80 | Dos: 0 | Devant: 0 | Epaules: 80"
  ],
  [
    "[Right Sleeve] dec-Rnd (1/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 78 | Dos: 0 | Devant: 0 | Epaules: 78"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 2/14, Row 1/9)",
    "Total: 78 | Dos: 0 | Devant: 0 | Epaules: 78"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 2/14, Row 2/9)",
    "Total: 78 | Dos: 0 | Devant: 0 | Epaules: 78"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 2/14, Row 3/9)",
    "Total: 78 | Dos: 0 | Devant: 0 | Epaules: 78"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 2/14, Row 4/9)",
    "Total: 78 | Dos: 0 | Devant: 0 | Epaules: 78"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 2/14, Row 5/9)",
    "Total: 78 | Dos: 0 | Devant: 0 | Epaules: 78"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 2/14, Row 6/9)",
    "Total: 78 | Dos: 0 | Devant: 0 | Epaules: 78"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 2/14, Row 7/9)",
    "Total: 78 | Dos: 0 | Devant: 0 | Epaules: 78"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 2/14, Row 8/9)",
    "Total: 78 | Dos: 0 | Devant: 0 | Epaules: 78"
  ],
  [
    "[Right Sleeve] dec-Rnd (2/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 76 | Dos: 0 | Devant: 0 | Epaules: 76"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 3/14, Row 1/9)",
    "Total: 76 | Dos: 0 | Devant: 0 | Epaules: 76"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 3/14, Row 2/9)",
    "Total: 76 | Dos: 0 | Devant: 0 | Epaules: 76"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 3/14, Row 3/9)",
    "Total: 76 | Dos: 0 | Devant: 0 | Epaules: 76"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 3/14, Row 4/9)",
    "Total: 76 | Dos: 0 | Devant: 0 | Epaules: 76"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 3/14, Row 5/9)",
    "Total: 76 | Dos: 0 | Devant: 0 | Epaules: 76"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 3/14, Row 6/9)",
    "Total: 76 | Dos: 0 | Devant: 0 | Epaules: 76"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 3/14, Row 7/9)",
    "Total: 76 | Dos: 0 | Devant: 0 | Epaules: 76"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 3/14, Row 8/9)",
    "Total: 76 | Dos: 0 | Devant: 0 | Epaules: 76"
  ],
  [
    "[Right Sleeve] dec-Rnd (3/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 74 | Dos: 0 | Devant: 0 | Epaules: 74"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 4/14, Row 1/9)",
    "Total: 74 | Dos: 0 | Devant: 0 | Epaules: 74"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 4/14, Row 2/9)",
    "Total: 74 | Dos: 0 | Devant: 0 | Epaules: 74"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 4/14, Row 3/9)",
    "Total: 74 | Dos: 0 | Devant: 0 | Epaules: 74"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 4/14, Row 4/9)",
    "Total: 74 | Dos: 0 | Devant: 0 | Epaules: 74"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 4/14, Row 5/9)",
    "Total: 74 | Dos: 0 | Devant: 0 | Epaules: 74"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 4/14, Row 6/9)",
    "Total: 74 | Dos: 0 | Devant: 0 | Epaules: 74"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 4/14, Row 7/9)",
    "Total: 74 | Dos: 0 | Devant: 0 | Epaules: 74"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 4/14, Row 8/9)",
    "Total: 74 | Dos: 0 | Devant: 0 | Epaules: 74"
  ],
  [
    "[Right Sleeve] dec-Rnd (4/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 72 | Dos: 0 | Devant: 0 | Epaules: 72"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 5/14, Row 1/9)",
    "Total: 72 | Dos: 0 | Devant: 0 | Epaules: 72"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 5/14, Row 2/9)",
    "Total: 72 | Dos: 0 | Devant: 0 | Epaules: 72"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 5/14, Row 3/9)",
    "Total: 72 | Dos: 0 | Devant: 0 | Epaules: 72"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 5/14, Row 4/9)",
    "Total: 72 | Dos: 0 | Devant: 0 | Epaules: 72"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 5/14, Row 5/9)",
    "Total: 72 | Dos: 0 | Devant: 0 | Epaules: 72"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 5/14, Row 6/9)",
    "Total: 72 | Dos: 0 | Devant: 0 | Epaules: 72"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 5/14, Row 7/9)",
    "Total: 72 | Dos: 0 | Devant: 0 | Epaules: 72"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 5/14, Row 8/9)",
    "Total: 72 | Dos: 0 | Devant: 0 | Epaules: 72"
  ],
  [
    "[Right Sleeve] dec-Rnd (5/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 70 | Dos: 0 | Devant: 0 | Epaules: 70"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 6/14, Row 1/9)",
    "Total: 70 | Dos: 0 | Devant: 0 | Epaules: 70"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 6/14, Row 2/9)",
    "Total: 70 | Dos: 0 | Devant: 0 | Epaules: 70"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 6/14, Row 3/9)",
    "Total: 70 | Dos: 0 | Devant: 0 | Epaules: 70"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 6/14, Row 4/9)",
    "Total: 70 | Dos: 0 | Devant: 0 | Epaules: 70"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 6/14, Row 5/9)",
    "Total: 70 | Dos: 0 | Devant: 0 | Epaules: 70"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 6/14, Row 6/9)",
    "Total: 70 | Dos: 0 | Devant: 0 | Epaules: 70"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 6/14, Row 7/9)",
    "Total: 70 | Dos: 0 | Devant: 0 | Epaules: 70"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 6/14, Row 8/9)",
    "Total: 70 | Dos: 0 | Devant: 0 | Epaules: 70"
  ],
  [
    "[Right Sleeve] dec-Rnd (6/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 68 | Dos: 0 | Devant: 0 | Epaules: 68"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 7/14, Row 1/9)",
    "Total: 68 | Dos: 0 | Devant: 0 | Epaules: 68"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 7/14, Row 2/9)",
    "Total: 68 | Dos: 0 | Devant: 0 | Epaules: 68"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 7/14, Row 3/9)",
    "Total: 68 | Dos: 0 | Devant: 0 | Epaules: 68"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 7/14, Row 4/9)",
    "Total: 68 | Dos: 0 | Devant: 0 | Epaules: 68"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 7/14, Row 5/9)",
    "Total: 68 | Dos: 0 | Devant: 0 | Epaules: 68"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 7/14, Row 6/9)",
    "Total: 68 | Dos: 0 | Devant: 0 | Epaules: 68"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 7/14, Row 7/9)",
    "Total: 68 | Dos: 0 | Devant: 0 | Epaules: 68"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 7/14, Row 8/9)",
    "Total: 68 | Dos: 0 | Devant: 0 | Epaules: 68"
  ],
  [
    "[Right Sleeve] dec-Rnd (7/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 66 | Dos: 0 | Devant: 0 | Epaules: 66"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 8/14, Row 1/9)",
    "Total: 66 | Dos: 0 | Devant: 0 | Epaules: 66"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 8/14, Row 2/9)",
    "Total: 66 | Dos: 0 | Devant: 0 | Epaules: 66"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 8/14, Row 3/9)",
    "Total: 66 | Dos: 0 | Devant: 0 | Epaules: 66"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 8/14, Row 4/9)",
    "Total: 66 | Dos: 0 | Devant: 0 | Epaules: 66"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 8/14, Row 5/9)",
    "Total: 66 | Dos: 0 | Devant: 0 | Epaules: 66"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 8/14, Row 6/9)",
    "Total: 66 | Dos: 0 | Devant: 0 | Epaules: 66"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 8/14, Row 7/9)",
    "Total: 66 | Dos: 0 | Devant: 0 | Epaules: 66"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 8/14, Row 8/9)",
    "Total: 66 | Dos: 0 | Devant: 0 | Epaules: 66"
  ],
  [
    "[Right Sleeve] dec-Rnd (8/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 64 | Dos: 0 | Devant: 0 | Epaules: 64"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 9/14, Row 1/9)",
    "Total: 64 | Dos: 0 | Devant: 0 | Epaules: 64"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 9/14, Row 2/9)",
    "Total: 64 | Dos: 0 | Devant: 0 | Epaules: 64"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 9/14, Row 3/9)",
    "Total: 64 | Dos: 0 | Devant: 0 | Epaules: 64"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 9/14, Row 4/9)",
    "Total: 64 | Dos: 0 | Devant: 0 | Epaules: 64"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 9/14, Row 5/9)",
    "Total: 64 | Dos: 0 | Devant: 0 | Epaules: 64"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 9/14, Row 6/9)",
    "Total: 64 | Dos: 0 | Devant: 0 | Epaules: 64"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 9/14, Row 7/9)",
    "Total: 64 | Dos: 0 | Devant: 0 | Epaules: 64"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 9/14, Row 8/9)",
    "Total: 64 | Dos: 0 | Devant: 0 | Epaules: 64"
  ],
  [
    "[Right Sleeve] dec-Rnd (9/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 62 | Dos: 0 | Devant: 0 | Epaules: 62"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 10/14, Row 1/9)",
    "Total: 62 | Dos: 0 | Devant: 0 | Epaules: 62"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 10/14, Row 2/9)",
    "Total: 62 | Dos: 0 | Devant: 0 | Epaules: 62"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 10/14, Row 3/9)",
    "Total: 62 | Dos: 0 | Devant: 0 | Epaules: 62"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 10/14, Row 4/9)",
    "Total: 62 | Dos: 0 | Devant: 0 | Epaules: 62"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 10/14, Row 5/9)",
    "Total: 62 | Dos: 0 | Devant: 0 | Epaules: 62"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 10/14, Row 6/9)",
    "Total: 62 | Dos: 0 | Devant: 0 | Epaules: 62"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 10/14, Row 7/9)",
    "Total: 62 | Dos: 0 | Devant: 0 | Epaules: 62"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 10/14, Row 8/9)",
    "Total: 62 | Dos: 0 | Devant: 0 | Epaules: 62"
  ],
  [
    "[Right Sleeve] dec-Rnd (10/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 60 | Dos: 0 | Devant: 0 | Epaules: 60"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 11/14, Row 1/9)",
    "Total: 60 | Dos: 0 | Devant: 0 | Epaules: 60"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 11/14, Row 2/9)",
    "Total: 60 | Dos: 0 | Devant: 0 | Epaules: 60"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 11/14, Row 3/9)",
    "Total: 60 | Dos: 0 | Devant: 0 | Epaules: 60"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 11/14, Row 4/9)",
    "Total: 60 | Dos: 0 | Devant: 0 | Epaules: 60"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 11/14, Row 5/9)",
    "Total: 60 | Dos: 0 | Devant: 0 | Epaules: 60"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 11/14, Row 6/9)",
    "Total: 60 | Dos: 0 | Devant: 0 | Epaules: 60"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 11/14, Row 7/9)",
    "Total: 60 | Dos: 0 | Devant: 0 | Epaules: 60"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 11/14, Row 8/9)",
    "Total: 60 | Dos: 0 | Devant: 0 | Epaules: 60"
  ],
  [
    "[Right Sleeve] dec-Rnd (11/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 58 | Dos: 0 | Devant: 0 | Epaules: 58"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 12/14, Row 1/9)",
    "Total: 58 | Dos: 0 | Devant: 0 | Epaules: 58"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 12/14, Row 2/9)",
    "Total: 58 | Dos: 0 | Devant: 0 | Epaules: 58"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 12/14, Row 3/9)",
    "Total: 58 | Dos: 0 | Devant: 0 | Epaules: 58"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 12/14, Row 4/9)",
    "Total: 58 | Dos: 0 | Devant: 0 | Epaules: 58"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 12/14, Row 5/9)",
    "Total: 58 | Dos: 0 | Devant: 0 | Epaules: 58"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 12/14, Row 6/9)",
    "Total: 58 | Dos: 0 | Devant: 0 | Epaules: 58"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 12/14, Row 7/9)",
    "Total: 58 | Dos: 0 | Devant: 0 | Epaules: 58"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 12/14, Row 8/9)",
    "Total: 58 | Dos: 0 | Devant: 0 | Epaules: 58"
  ],
  [
    "[Right Sleeve] dec-Rnd (12/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 56 | Dos: 0 | Devant: 0 | Epaules: 56"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 13/14, Row 1/9)",
    "Total: 56 | Dos: 0 | Devant: 0 | Epaules: 56"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 13/14, Row 2/9)",
    "Total: 56 | Dos: 0 | Devant: 0 | Epaules: 56"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 13/14, Row 3/9)",
    "Total: 56 | Dos: 0 | Devant: 0 | Epaules: 56"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 13/14, Row 4/9)",
    "Total: 56 | Dos: 0 | Devant: 0 | Epaules: 56"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 13/14, Row 5/9)",
    "Total: 56 | Dos: 0 | Devant: 0 | Epaules: 56"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 13/14, Row 6/9)",
    "Total: 56 | Dos: 0 | Devant: 0 | Epaules: 56"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 13/14, Row 7/9)",
    "Total: 56 | Dos: 0 | Devant: 0 | Epaules: 56"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 13/14, Row 8/9)",
    "Total: 56 | Dos: 0 | Devant: 0 | Epaules: 56"
  ],
  [
    "[Right Sleeve] dec-Rnd (13/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 54 | Dos: 0 | Devant: 0 | Epaules: 54"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 14/14, Row 1/9)",
    "Total: 54 | Dos: 0 | Devant: 0 | Epaules: 54"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 14/14, Row 2/9)",
    "Total: 54 | Dos: 0 | Devant: 0 | Epaules: 54"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 14/14, Row 3/9)",
    "Total: 54 | Dos: 0 | Devant: 0 | Epaules: 54"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 14/14, Row 4/9)",
    "Total: 54 | Dos: 0 | Devant: 0 | Epaules: 54"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 14/14, Row 5/9)",
    "Total: 54 | Dos: 0 | Devant: 0 | Epaules: 54"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 14/14, Row 6/9)",
    "Total: 54 | Dos: 0 | Devant: 0 | Epaules: 54"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 14/14, Row 7/9)",
    "Total: 54 | Dos: 0 | Devant: 0 | Epaules: 54"
  ],
  [
    "[Right Sleeve] Knit to end of round (Cycle 14/14, Row 8/9)",
    "Total: 54 | Dos: 0 | Devant: 0 | Epaules: 54"
  ],
  [
    "[Right Sleeve] dec-Rnd (14/14): k2tog",
    "knit until 2 sts left",
    "ssk",
    "Total: 52 | Dos: 0 | Devant: 0 | Epaules: 52"
  ],
  [
    "[Right Sleeve] Continue to knit in the round without decreases until sleeve measures 52-56 cm",
    "Total: 52 | Dos: 0 | Devant: 0 | Epaules: 52"
  ],
  [
    "[Right Sleeve] Knit 1 rnd tbl",
    "Total: 52 | Dos: 0 | Devant: 0 | Epaules: 52"
  ],
  [
    "[Right Sleeve] Bind off all sts by knitting them tbl",
    "Total: 0 | Dos: 0 | Devant: 0 | Epaules: 0"
  ],
  [
    "[Neckline] Using 2 mm needle, pick up and knit 1 st along each cast-on st (122 sts)",
    "PM for beginning/end of round",
    "Total: 122 | Dos: 0 | Devant: 0 | Epaules: 0"
  ],
  [
    "[Neckline] Rnd 1: Purl tbl until end of round",
    "Total: 122 | Dos: 0 | Devant: 0 | Epaules: 0"
  ],
  [
    "[Neckline] Rnd 2: Knit until end of round",
    "Total: 122 | Dos: 0 | Devant: 0 | Epaules: 0"
  ],
  [
    "[Neckline] Rnd 3: Knit until end of round",
    "Total: 122 | Dos: 0 | Devant: 0 | Epaules: 0"
  ],
  [
    "[Neckline] Rnd 4: Purl until end of round",
    "Total: 122 | Dos: 0 | Devant: 0 | Epaules: 0"
  ],
  [
    "[Neckline] Rnd 5: Knit until end of round",
    "Total: 122 | Dos: 0 | Devant: 0 | Epaules: 0"
  ],
  [
    "[Neckline] Rnd 6: Knit until end of round",
    "Total: 122 | Dos: 0 | Devant: 0 | Epaules: 0"
  ],
  [
    "[Neckline] Rnd 7: Knit until end of round",
    "Total: 122 | Dos: 0 | Devant: 0 | Epaules: 0"
  ],
  [
    "[Neckline] Bind off all sts",
    "Total: 0 | Dos: 0 | Devant: 0 | Epaules: 0"
  ]
];

if (typeof window !== "undefined") {
  window.TECHNICAL_GLOSSARY = TECHNICAL_GLOSSARY;
  window.KNITTING_PATTERN_SIZE_2 = KNITTING_PATTERN_SIZE_2;
}
