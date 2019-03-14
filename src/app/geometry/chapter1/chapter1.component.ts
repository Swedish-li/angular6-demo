import { LaTex } from './../la-tex/la-tex.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter1',
  templateUrl: './chapter1.component.html',
  styleUrls: ['./chapter1.component.scss']
})
export class Chapter1Component implements OnInit {
  list: LaTex[] = [
    {
      eq: 'V = (a,b,c,d,e,f)',
      title: '向量',
      desc:
        'a, b, c, d, e, f 为实数.在计算机图形学中，向量可以用来表示空间中的位置或方向。'
    },
    {
      eq:
        '\\begin{alignedat}{5}  P &\\rarr Translate &\\rarr P_T \\\\　V &\\rarr Rotate &\\rarr V_T \\end{alignedat}',
      title: '点的变换和坐标的旋转',
      desc: '下标字母 T 表示转换(transformed)'
    },
    {
      eq:
        '\\text{\\textbardbl}V\\text{\\textbardbl} = \\sqrt{V.x*V.x + V.y*V.y + V.z*V.z}',
      title: '向量长度计算',
      desc: ''
    },
    {
      // \dfrac{a-1}{b-1}
      eq:
        '\\text{\\^{V}} = \\dfrac{V}{\\text{\\textbardbl}V\\text{\\textbardbl}} ',
      title: '向量归一化(Normalize)',
      desc: ''
    },
    {
      eq: 'A\\sdot B = A.x * B.x + A.y * B.y + A.z * B.z',
      title: '数量积（dot product; scalar product，也称为点积）',
      desc: ''
    },
    {
      eq: `C = A \\times B
      \\\\ C_X = A_Y * B_Z - A_Z * B_Y
      \\\\ C_Y = A_Z * B_X - A_X * B_Z
      \\\\ C_Z = A_X * B_Y - A_Y * B_X
      \\\\ \\begin{pmatrix}
            a_x \\\\ a_y \\\\ a_z
            \\end{pmatrix} \\times \\begin{pmatrix} b_x \\\\ b_y \\\\ b_z \\end{pmatrix}
            = \\begin{pmatrix} a_y b_z - a_z b_y \\\\ a_z b_x - a_x b_z \\\\ a_x b_y - a_y b_x \\end{pmatrix}
      `,
      title: '向量积(Cross Product)',
      desc: ''
    }
  ];

  ngOnInit() {}
}
