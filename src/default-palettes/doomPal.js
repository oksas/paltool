const doomPal = [
  { r: 0, g: 0, b: 0 },
  { r: 31, g: 23, b: 11 },
  { r: 23, g: 15, b: 7 },
  { r: 75, g: 75, b: 75 },
  { r: 255, g: 255, b: 255 },
  { r: 27, g: 27, b: 27 },
  { r: 19, g: 19, b: 19 },
  { r: 11, g: 11, b: 11 },
  { r: 7, g: 7, b: 7 },
  { r: 47, g: 55, b: 31 },
  { r: 35, g: 43, b: 15 },
  { r: 23, g: 31, b: 7 },
  { r: 15, g: 23, b: 0 },
  { r: 79, g: 59, b: 43 },
  { r: 71, g: 51, b: 35 },
  { r: 63, g: 43, b: 27 },
  { r: 255, g: 183, b: 183 },
  { r: 247, g: 171, b: 171 },
  { r: 243, g: 163, b: 163 },
  { r: 235, g: 151, b: 151 },
  { r: 231, g: 143, b: 143 },
  { r: 223, g: 135, b: 135 },
  { r: 219, g: 123, b: 123 },
  { r: 211, g: 115, b: 115 },
  { r: 203, g: 107, b: 107 },
  { r: 199, g: 99, b: 99 },
  { r: 191, g: 91, b: 91 },
  { r: 187, g: 87, b: 87 },
  { r: 179, g: 79, b: 79 },
  { r: 175, g: 71, b: 71 },
  { r: 167, g: 63, b: 63 },
  { r: 163, g: 59, b: 59 },
  { r: 155, g: 51, b: 51 },
  { r: 151, g: 47, b: 47 },
  { r: 143, g: 43, b: 43 },
  { r: 139, g: 35, b: 35 },
  { r: 131, g: 31, b: 31 },
  { r: 127, g: 27, b: 27 },
  { r: 119, g: 23, b: 23 },
  { r: 115, g: 19, b: 19 },
  { r: 107, g: 15, b: 15 },
  { r: 103, g: 11, b: 11 },
  { r: 95, g: 7, b: 7 },
  { r: 91, g: 7, b: 7 },
  { r: 83, g: 7, b: 7 },
  { r: 79, g: 0, b: 0 },
  { r: 71, g: 0, b: 0 },
  { r: 67, g: 0, b: 0 },
  { r: 255, g: 235, b: 223 },
  { r: 255, g: 227, b: 211 },
  { r: 255, g: 219, b: 199 },
  { r: 255, g: 211, b: 187 },
  { r: 255, g: 207, b: 179 },
  { r: 255, g: 199, b: 167 },
  { r: 255, g: 191, b: 155 },
  { r: 255, g: 187, b: 147 },
  { r: 255, g: 179, b: 131 },
  { r: 247, g: 171, b: 123 },
  { r: 239, g: 163, b: 115 },
  { r: 231, g: 155, b: 107 },
  { r: 223, g: 147, b: 99 },
  { r: 215, g: 139, b: 91 },
  { r: 207, g: 131, b: 83 },
  { r: 203, g: 127, b: 79 },
  { r: 191, g: 123, b: 75 },
  { r: 179, g: 115, b: 71 },
  { r: 171, g: 111, b: 67 },
  { r: 163, g: 107, b: 63 },
  { r: 155, g: 99, b: 59 },
  { r: 143, g: 95, b: 55 },
  { r: 135, g: 87, b: 51 },
  { r: 127, g: 83, b: 47 },
  { r: 119, g: 79, b: 43 },
  { r: 107, g: 71, b: 39 },
  { r: 95, g: 67, b: 35 },
  { r: 83, g: 63, b: 31 },
  { r: 75, g: 55, b: 27 },
  { r: 63, g: 47, b: 23 },
  { r: 51, g: 43, b: 19 },
  { r: 43, g: 35, b: 15 },
  { r: 239, g: 239, b: 239 },
  { r: 231, g: 231, b: 231 },
  { r: 223, g: 223, b: 223 },
  { r: 219, g: 219, b: 219 },
  { r: 211, g: 211, b: 211 },
  { r: 203, g: 203, b: 203 },
  { r: 199, g: 199, b: 199 },
  { r: 191, g: 191, b: 191 },
  { r: 183, g: 183, b: 183 },
  { r: 179, g: 179, b: 179 },
  { r: 171, g: 171, b: 171 },
  { r: 167, g: 167, b: 167 },
  { r: 159, g: 159, b: 159 },
  { r: 151, g: 151, b: 151 },
  { r: 147, g: 147, b: 147 },
  { r: 139, g: 139, b: 139 },
  { r: 131, g: 131, b: 131 },
  { r: 127, g: 127, b: 127 },
  { r: 119, g: 119, b: 119 },
  { r: 111, g: 111, b: 111 },
  { r: 107, g: 107, b: 107 },
  { r: 99, g: 99, b: 99 },
  { r: 91, g: 91, b: 91 },
  { r: 87, g: 87, b: 87 },
  { r: 79, g: 79, b: 79 },
  { r: 71, g: 71, b: 71 },
  { r: 67, g: 67, b: 67 },
  { r: 59, g: 59, b: 59 },
  { r: 55, g: 55, b: 55 },
  { r: 47, g: 47, b: 47 },
  { r: 39, g: 39, b: 39 },
  { r: 35, g: 35, b: 35 },
  { r: 119, g: 255, b: 111 },
  { r: 111, g: 239, b: 103 },
  { r: 103, g: 223, b: 95 },
  { r: 95, g: 207, b: 87 },
  { r: 91, g: 191, b: 79 },
  { r: 83, g: 175, b: 71 },
  { r: 75, g: 159, b: 63 },
  { r: 67, g: 147, b: 55 },
  { r: 63, g: 131, b: 47 },
  { r: 55, g: 115, b: 43 },
  { r: 47, g: 99, b: 35 },
  { r: 39, g: 83, b: 27 },
  { r: 31, g: 67, b: 23 },
  { r: 23, g: 51, b: 15 },
  { r: 19, g: 35, b: 11 },
  { r: 11, g: 23, b: 7 },
  { r: 191, g: 167, b: 143 },
  { r: 183, g: 159, b: 135 },
  { r: 175, g: 151, b: 127 },
  { r: 167, g: 143, b: 119 },
  { r: 159, g: 135, b: 111 },
  { r: 155, g: 127, b: 107 },
  { r: 147, g: 123, b: 99 },
  { r: 139, g: 115, b: 91 },
  { r: 131, g: 107, b: 87 },
  { r: 123, g: 99, b: 79 },
  { r: 119, g: 95, b: 75 },
  { r: 111, g: 87, b: 67 },
  { r: 103, g: 83, b: 63 },
  { r: 95, g: 75, b: 55 },
  { r: 87, g: 67, b: 51 },
  { r: 83, g: 63, b: 47 },
  { r: 159, g: 131, b: 99 },
  { r: 143, g: 119, b: 83 },
  { r: 131, g: 107, b: 75 },
  { r: 119, g: 95, b: 63 },
  { r: 103, g: 83, b: 51 },
  { r: 91, g: 71, b: 43 },
  { r: 79, g: 59, b: 35 },
  { r: 67, g: 51, b: 27 },
  { r: 123, g: 127, b: 99 },
  { r: 111, g: 115, b: 87 },
  { r: 103, g: 107, b: 79 },
  { r: 91, g: 99, b: 71 },
  { r: 83, g: 87, b: 59 },
  { r: 71, g: 79, b: 51 },
  { r: 63, g: 71, b: 43 },
  { r: 55, g: 63, b: 39 },
  { r: 255, g: 255, b: 115 },
  { r: 235, g: 219, b: 87 },
  { r: 215, g: 187, b: 67 },
  { r: 195, g: 155, b: 47 },
  { r: 175, g: 123, b: 31 },
  { r: 155, g: 91, b: 19 },
  { r: 135, g: 67, b: 7 },
  { r: 115, g: 43, b: 0 },
  { r: 255, g: 255, b: 255 },
  { r: 255, g: 219, b: 219 },
  { r: 255, g: 187, b: 187 },
  { r: 255, g: 155, b: 155 },
  { r: 255, g: 123, b: 123 },
  { r: 255, g: 95, b: 95 },
  { r: 255, g: 63, b: 63 },
  { r: 255, g: 31, b: 31 },
  { r: 255, g: 0, b: 0 },
  { r: 239, g: 0, b: 0 },
  { r: 227, g: 0, b: 0 },
  { r: 215, g: 0, b: 0 },
  { r: 203, g: 0, b: 0 },
  { r: 191, g: 0, b: 0 },
  { r: 179, g: 0, b: 0 },
  { r: 167, g: 0, b: 0 },
  { r: 155, g: 0, b: 0 },
  { r: 139, g: 0, b: 0 },
  { r: 127, g: 0, b: 0 },
  { r: 115, g: 0, b: 0 },
  { r: 103, g: 0, b: 0 },
  { r: 91, g: 0, b: 0 },
  { r: 79, g: 0, b: 0 },
  { r: 67, g: 0, b: 0 },
  { r: 231, g: 231, b: 255 },
  { r: 199, g: 199, b: 255 },
  { r: 171, g: 171, b: 255 },
  { r: 143, g: 143, b: 255 },
  { r: 115, g: 115, b: 255 },
  { r: 83, g: 83, b: 255 },
  { r: 55, g: 55, b: 255 },
  { r: 27, g: 27, b: 255 },
  { r: 0, g: 0, b: 255 },
  { r: 0, g: 0, b: 227 },
  { r: 0, g: 0, b: 203 },
  { r: 0, g: 0, b: 179 },
  { r: 0, g: 0, b: 155 },
  { r: 0, g: 0, b: 131 },
  { r: 0, g: 0, b: 107 },
  { r: 0, g: 0, b: 83 },
  { r: 255, g: 255, b: 255 },
  { r: 255, g: 235, b: 219 },
  { r: 255, g: 215, b: 187 },
  { r: 255, g: 199, b: 155 },
  { r: 255, g: 179, b: 123 },
  { r: 255, g: 163, b: 91 },
  { r: 255, g: 143, b: 59 },
  { r: 255, g: 127, b: 27 },
  { r: 243, g: 115, b: 23 },
  { r: 235, g: 111, b: 15 },
  { r: 223, g: 103, b: 15 },
  { r: 215, g: 95, b: 11 },
  { r: 203, g: 87, b: 7 },
  { r: 195, g: 79, b: 0 },
  { r: 183, g: 71, b: 0 },
  { r: 175, g: 67, b: 0 },
  { r: 255, g: 255, b: 255 },
  { r: 255, g: 255, b: 215 },
  { r: 255, g: 255, b: 179 },
  { r: 255, g: 255, b: 143 },
  { r: 255, g: 255, b: 107 },
  { r: 255, g: 255, b: 71 },
  { r: 255, g: 255, b: 35 },
  { r: 255, g: 255, b: 0 },
  { r: 167, g: 63, b: 0 },
  { r: 159, g: 55, b: 0 },
  { r: 147, g: 47, b: 0 },
  { r: 135, g: 35, b: 0 },
  { r: 79, g: 59, b: 39 },
  { r: 67, g: 47, b: 27 },
  { r: 55, g: 35, b: 19 },
  { r: 47, g: 27, b: 11 },
  { r: 0, g: 0, b: 83 },
  { r: 0, g: 0, b: 71 },
  { r: 0, g: 0, b: 59 },
  { r: 0, g: 0, b: 47 },
  { r: 0, g: 0, b: 35 },
  { r: 0, g: 0, b: 23 },
  { r: 0, g: 0, b: 11 },
  { r: 0, g: 0, b: 0 },
  { r: 255, g: 159, b: 67 },
  { r: 255, g: 231, b: 75 },
  { r: 255, g: 123, b: 255 },
  { r: 255, g: 0, b: 255 },
  { r: 207, g: 0, b: 207 },
  { r: 159, g: 0, b: 155 },
  { r: 111, g: 0, b: 107 },
  { r: 167, g: 107, b: 107 }
];

export default doomPal;
