const hereticPal = [
  { r: 2, g: 2, b: 2 },
  { r: 2, g: 2, b: 2 },
  { r: 16, g: 16, b: 16 },
  { r: 24, g: 24, b: 24 },
  { r: 31, g: 31, b: 31 },
  { r: 36, g: 36, b: 36 },
  { r: 44, g: 44, b: 44 },
  { r: 48, g: 48, b: 48 },
  { r: 55, g: 55, b: 55 },
  { r: 63, g: 63, b: 63 },
  { r: 70, g: 70, b: 70 },
  { r: 78, g: 78, b: 78 },
  { r: 86, g: 86, b: 86 },
  { r: 93, g: 93, b: 93 },
  { r: 101, g: 101, b: 101 },
  { r: 108, g: 108, b: 108 },
  { r: 116, g: 116, b: 116 },
  { r: 124, g: 124, b: 124 },
  { r: 131, g: 131, b: 131 },
  { r: 139, g: 139, b: 139 },
  { r: 146, g: 146, b: 146 },
  { r: 154, g: 154, b: 154 },
  { r: 162, g: 162, b: 162 },
  { r: 169, g: 169, b: 169 },
  { r: 177, g: 177, b: 177 },
  { r: 184, g: 184, b: 184 },
  { r: 192, g: 192, b: 192 },
  { r: 200, g: 200, b: 200 },
  { r: 207, g: 207, b: 207 },
  { r: 210, g: 210, b: 210 },
  { r: 215, g: 215, b: 215 },
  { r: 222, g: 222, b: 222 },
  { r: 228, g: 228, b: 228 },
  { r: 236, g: 236, b: 236 },
  { r: 245, g: 245, b: 245 },
  { r: 255, g: 255, b: 255 },
  { r: 50, g: 50, b: 50 },
  { r: 59, g: 60, b: 59 },
  { r: 69, g: 72, b: 68 },
  { r: 78, g: 80, b: 77 },
  { r: 88, g: 93, b: 86 },
  { r: 97, g: 100, b: 95 },
  { r: 109, g: 112, b: 104 },
  { r: 116, g: 123, b: 112 },
  { r: 125, g: 131, b: 121 },
  { r: 134, g: 141, b: 130 },
  { r: 144, g: 151, b: 139 },
  { r: 153, g: 161, b: 148 },
  { r: 163, g: 171, b: 157 },
  { r: 172, g: 181, b: 166 },
  { r: 181, g: 189, b: 176 },
  { r: 189, g: 196, b: 185 },
  { r: 20, g: 16, b: 36 },
  { r: 24, g: 24, b: 44 },
  { r: 36, g: 36, b: 60 },
  { r: 52, g: 52, b: 80 },
  { r: 68, g: 68, b: 96 },
  { r: 88, g: 88, b: 116 },
  { r: 108, g: 108, b: 136 },
  { r: 124, g: 124, b: 152 },
  { r: 148, g: 148, b: 172 },
  { r: 164, g: 164, b: 184 },
  { r: 180, g: 184, b: 200 },
  { r: 192, g: 196, b: 208 },
  { r: 208, g: 208, b: 216 },
  { r: 224, g: 224, b: 224 },
  { r: 27, g: 15, b: 8 },
  { r: 38, g: 20, b: 11 },
  { r: 49, g: 27, b: 14 },
  { r: 61, g: 31, b: 14 },
  { r: 65, g: 35, b: 18 },
  { r: 74, g: 37, b: 19 },
  { r: 83, g: 43, b: 19 },
  { r: 87, g: 47, b: 23 },
  { r: 95, g: 51, b: 27 },
  { r: 103, g: 59, b: 31 },
  { r: 115, g: 67, b: 35 },
  { r: 123, g: 75, b: 39 },
  { r: 131, g: 83, b: 47 },
  { r: 143, g: 91, b: 51 },
  { r: 151, g: 99, b: 59 },
  { r: 160, g: 108, b: 64 },
  { r: 175, g: 116, b: 74 },
  { r: 180, g: 126, b: 81 },
  { r: 192, g: 135, b: 91 },
  { r: 204, g: 143, b: 93 },
  { r: 213, g: 151, b: 103 },
  { r: 216, g: 159, b: 115 },
  { r: 220, g: 167, b: 126 },
  { r: 223, g: 175, b: 138 },
  { r: 227, g: 183, b: 149 },
  { r: 230, g: 190, b: 161 },
  { r: 233, g: 198, b: 172 },
  { r: 237, g: 206, b: 184 },
  { r: 240, g: 214, b: 195 },
  { r: 62, g: 40, b: 11 },
  { r: 75, g: 50, b: 16 },
  { r: 84, g: 59, b: 23 },
  { r: 95, g: 67, b: 30 },
  { r: 103, g: 75, b: 38 },
  { r: 110, g: 83, b: 47 },
  { r: 123, g: 95, b: 55 },
  { r: 137, g: 107, b: 62 },
  { r: 150, g: 118, b: 75 },
  { r: 163, g: 129, b: 84 },
  { r: 171, g: 137, b: 92 },
  { r: 180, g: 146, b: 101 },
  { r: 188, g: 154, b: 109 },
  { r: 196, g: 162, b: 117 },
  { r: 204, g: 170, b: 125 },
  { r: 208, g: 176, b: 133 },
  { r: 37, g: 20, b: 4 },
  { r: 47, g: 24, b: 4 },
  { r: 57, g: 28, b: 6 },
  { r: 68, g: 33, b: 4 },
  { r: 76, g: 36, b: 3 },
  { r: 84, g: 40, b: 0 },
  { r: 97, g: 47, b: 2 },
  { r: 114, g: 54, b: 0 },
  { r: 125, g: 63, b: 6 },
  { r: 141, g: 75, b: 9 },
  { r: 155, g: 83, b: 17 },
  { r: 162, g: 95, b: 21 },
  { r: 169, g: 103, b: 26 },
  { r: 180, g: 113, b: 32 },
  { r: 188, g: 124, b: 20 },
  { r: 204, g: 136, b: 24 },
  { r: 220, g: 148, b: 28 },
  { r: 236, g: 160, b: 23 },
  { r: 244, g: 172, b: 47 },
  { r: 252, g: 187, b: 57 },
  { r: 252, g: 194, b: 70 },
  { r: 251, g: 201, b: 83 },
  { r: 251, g: 208, b: 97 },
  { r: 251, g: 214, b: 110 },
  { r: 251, g: 221, b: 123 },
  { r: 250, g: 228, b: 136 },
  { r: 157, g: 51, b: 4 },
  { r: 170, g: 65, b: 2 },
  { r: 185, g: 86, b: 4 },
  { r: 213, g: 118, b: 4 },
  { r: 236, g: 164, b: 3 },
  { r: 248, g: 190, b: 3 },
  { r: 255, g: 216, b: 43 },
  { r: 255, g: 255, b: 0 },
  { r: 67, g: 0, b: 0 },
  { r: 79, g: 0, b: 0 },
  { r: 91, g: 0, b: 0 },
  { r: 103, g: 0, b: 0 },
  { r: 115, g: 0, b: 0 },
  { r: 127, g: 0, b: 0 },
  { r: 139, g: 0, b: 0 },
  { r: 155, g: 0, b: 0 },
  { r: 167, g: 0, b: 0 },
  { r: 179, g: 0, b: 0 },
  { r: 191, g: 0, b: 0 },
  { r: 203, g: 0, b: 0 },
  { r: 215, g: 0, b: 0 },
  { r: 227, g: 0, b: 0 },
  { r: 239, g: 0, b: 0 },
  { r: 255, g: 0, b: 0 },
  { r: 255, g: 52, b: 52 },
  { r: 255, g: 74, b: 74 },
  { r: 255, g: 95, b: 95 },
  { r: 255, g: 123, b: 123 },
  { r: 255, g: 155, b: 155 },
  { r: 255, g: 179, b: 179 },
  { r: 255, g: 201, b: 201 },
  { r: 255, g: 215, b: 215 },
  { r: 60, g: 12, b: 88 },
  { r: 80, g: 8, b: 108 },
  { r: 104, g: 8, b: 128 },
  { r: 128, g: 0, b: 144 },
  { r: 152, g: 0, b: 176 },
  { r: 184, g: 0, b: 224 },
  { r: 216, g: 44, b: 252 },
  { r: 224, g: 120, b: 240 },
  { r: 37, g: 6, b: 129 },
  { r: 60, g: 33, b: 147 },
  { r: 82, g: 61, b: 165 },
  { r: 105, g: 88, b: 183 },
  { r: 128, g: 116, b: 201 },
  { r: 151, g: 143, b: 219 },
  { r: 173, g: 171, b: 237 },
  { r: 196, g: 198, b: 255 },
  { r: 2, g: 4, b: 41 },
  { r: 2, g: 5, b: 49 },
  { r: 6, g: 8, b: 57 },
  { r: 2, g: 5, b: 65 },
  { r: 2, g: 5, b: 79 },
  { r: 0, g: 4, b: 88 },
  { r: 0, g: 4, b: 96 },
  { r: 0, g: 4, b: 104 },
  { r: 2, g: 5, b: 121 },
  { r: 2, g: 5, b: 137 },
  { r: 6, g: 9, b: 159 },
  { r: 12, g: 16, b: 184 },
  { r: 32, g: 40, b: 200 },
  { r: 56, g: 60, b: 220 },
  { r: 80, g: 80, b: 253 },
  { r: 80, g: 108, b: 252 },
  { r: 80, g: 136, b: 252 },
  { r: 80, g: 164, b: 252 },
  { r: 80, g: 196, b: 252 },
  { r: 72, g: 220, b: 252 },
  { r: 80, g: 236, b: 252 },
  { r: 84, g: 252, b: 252 },
  { r: 152, g: 252, b: 252 },
  { r: 188, g: 252, b: 244 },
  { r: 11, g: 23, b: 7 },
  { r: 19, g: 35, b: 11 },
  { r: 23, g: 51, b: 15 },
  { r: 31, g: 67, b: 23 },
  { r: 39, g: 83, b: 27 },
  { r: 47, g: 99, b: 35 },
  { r: 55, g: 115, b: 43 },
  { r: 63, g: 131, b: 47 },
  { r: 67, g: 147, b: 55 },
  { r: 75, g: 159, b: 63 },
  { r: 83, g: 175, b: 71 },
  { r: 91, g: 191, b: 79 },
  { r: 95, g: 207, b: 87 },
  { r: 103, g: 223, b: 95 },
  { r: 111, g: 239, b: 103 },
  { r: 119, g: 255, b: 111 },
  { r: 23, g: 31, b: 23 },
  { r: 27, g: 35, b: 27 },
  { r: 31, g: 43, b: 31 },
  { r: 35, g: 51, b: 35 },
  { r: 43, g: 55, b: 43 },
  { r: 47, g: 63, b: 47 },
  { r: 51, g: 71, b: 51 },
  { r: 59, g: 75, b: 55 },
  { r: 63, g: 83, b: 59 },
  { r: 67, g: 91, b: 67 },
  { r: 75, g: 95, b: 71 },
  { r: 79, g: 103, b: 75 },
  { r: 87, g: 111, b: 79 },
  { r: 91, g: 115, b: 83 },
  { r: 95, g: 123, b: 87 },
  { r: 103, g: 131, b: 95 },
  { r: 255, g: 223, b: 0 },
  { r: 255, g: 191, b: 0 },
  { r: 255, g: 159, b: 0 },
  { r: 255, g: 127, b: 0 },
  { r: 255, g: 95, b: 0 },
  { r: 255, g: 63, b: 0 },
  { r: 244, g: 14, b: 3 },
  { r: 55, g: 0, b: 0 },
  { r: 47, g: 0, b: 0 },
  { r: 39, g: 0, b: 0 },
  { r: 23, g: 0, b: 0 },
  { r: 15, g: 15, b: 15 },
  { r: 11, g: 11, b: 11 },
  { r: 7, g: 7, b: 7 },
  { r: 255, g: 255, b: 255 }
];

export default hereticPal;
