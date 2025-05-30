import paletteImage1 from './images/palette1.png';
import paletteImage2 from './images/palette2.png';
import paletteImage3 from './images/palette3.png';
import paletteImage4 from './images/palette4.png';
import paletteImage5 from './images/palette5.png';
import paletteImage6 from './images/palette6.png';
import paletteImage7 from './images/palette7.png';
import paletteImage8 from './images/palette8.png';
import paletteImage9 from './images/palette9.png';
import paletteImage10 from './images/palette10.png';
import paletteImage11 from './images/palette11.png';
import paletteImage12 from './images/palette12.png';
import paletteImage13 from './images/palette13.png';
import paletteImage14 from './images/palette14.png';
import paletteImage15 from './images/palette15.png';
import paletteImage16 from './images/palette16.png';
import paletteImage17 from './images/palette17.png';
import paletteImage18 from './images/palette18.png';
import paletteImage19 from './images/palette19.png';
import paletteImage20 from './images/palette20.png';
import paletteImage21 from './images/palette21.png';
import paletteImage22 from './images/palette22.png';
import paletteImage23 from './images/palette23.png';
import paletteImage24 from './images/palette24.png';

type Palette = {
  image: string;
  numOfPalette: number;
  primary: string[];
  neutrals: string[];
  supporting: string[];
};

type Palettes = {
  [paletteName: string]: Palette;
};

export const palettes: Palettes = {
  palette1: {
    image: paletteImage1,
    numOfPalette: 1,
    primary: [
      'bg-cyan-50',
      'bg-cyan-100',
      'bg-cyan-200',
      'bg-cyan-300',
      'bg-cyan-400',
      'bg-cyan-500',
      'bg-cyan-600',
      'bg-cyan-700',
      'bg-cyan-800',
      'bg-cyan-900',
      'bg-cyan-950',
    ],
    neutrals: [
      'bg-gray-50',
      'bg-gray-100',
      'bg-gray-200',
      'bg-gray-300',
      'bg-gray-400',
      'bg-gray-500',
      'bg-gray-600',
      'bg-gray-700',
      'bg-gray-800',
      'bg-gray-900',
      'bg-gray-950',
    ],
    supporting: [
      'bg-indigo-50',
      'bg-indigo-100',
      'bg-indigo-200',
      'bg-indigo-300',
      'bg-indigo-400',
      'bg-indigo-500',
      'bg-indigo-600',
      'bg-indigo-700',
      'bg-indigo-800',
      'bg-indigo-900',
      'bg-indigo-950',
      'break',
      'bg-pink-50',
      'bg-pink-100',
      'bg-pink-200',
      'bg-pink-300',
      'bg-pink-400',
      'bg-pink-500',
      'bg-pink-600',
      'bg-pink-700',
      'bg-pink-800',
      'bg-pink-900',
      'bg-pink-950',
      'break',
      'bg-red-50',
      'bg-red-100',
      'bg-red-200',
      'bg-red-300',
      'bg-red-400',
      'bg-red-500',
      'bg-red-600',
      'bg-red-700',
      'bg-red-800',
      'bg-red-900',
      'bg-red-950',
      'break',
      'bg-yellow-50',
      'bg-yellow-100',
      'bg-yellow-200',
      'bg-yellow-300',
      'bg-yellow-400',
      'bg-yellow-500',
      'bg-yellow-600',
      'bg-yellow-700',
      'bg-yellow-800',
      'bg-yellow-900',
      'bg-yellow-950',
    ],
  },
  palette2: {
    image: paletteImage2,
    numOfPalette: 2,
    primary: [
      'bg-blue-50',
      'bg-blue-100',
      'bg-blue-200',
      'bg-blue-300',
      'bg-blue-400',
      'bg-blue-500',
      'bg-blue-600',
      'bg-blue-700',
      'bg-blue-800',
      'bg-blue-900',
      'bg-blue-950',
      'break',
      'bg-[#FFFBEA]',
      'bg-[#FFF3C4]',
      'bg-[#FCE588]',
      'bg-[#FADB5F]',
      'bg-[#F7C948]',
      'bg-[#F0B429]',
      'bg-[#DE911D]',
      'bg-[#CB6E17]',
      'bg-[#B44D12]',
      'bg-[#8D2B0B]',
    ],
    neutrals: [
      'bg-[#F0F4F8]',
      'bg-[#D9E2EC]',
      'bg-[#BCCCDC]',
      'bg-[#9FB3C8]',
      'bg-[#829AB1]',
      'bg-[#627D98]',
      'bg-[#486581]',
      'bg-[#334E68]',
      'bg-[#243B53]',
      'bg-[#102A43]',
    ],
    supporting: [
      'bg-cyan-50',
      'bg-cyan-100',
      'bg-cyan-200',
      'bg-cyan-300',
      'bg-cyan-400',
      'bg-cyan-500',
      'bg-cyan-600',
      'bg-cyan-700',
      'bg-cyan-800',
      'bg-cyan-900',
      'bg-cyan-950',
      'break',
      'bg-red-50',
      'bg-red-100',
      'bg-red-200',
      'bg-red-300',
      'bg-red-400',
      'bg-red-500',
      'bg-red-600',
      'bg-red-700',
      'bg-red-800',
      'bg-red-900',
      'bg-red-950',
    ],
  },
  palette3: {
    image: paletteImage3,
    numOfPalette: 3,
    primary: [
      'bg-purple-50',
      'bg-purple-100',
      'bg-purple-200',
      'bg-purple-300',
      'bg-purple-400',
      'bg-purple-500',
      'bg-purple-600',
      'bg-purple-700',
      'bg-purple-800',
      'bg-purple-900',
      'bg-purple-950',
      'break',
      'bg-teal-50',
      'bg-teal-100',
      'bg-teal-200',
      'bg-teal-300',
      'bg-teal-400',
      'bg-teal-500',
      'bg-teal-600',
      'bg-teal-700',
      'bg-teal-800',
      'bg-teal-900',
      'bg-teal-950',
    ],

    neutrals: [
      'bg-[#F0F4F8]',
      'bg-[#D9E2EC]',
      'bg-[#BCCCDC]',
      'bg-[#9FB3C8]',
      'bg-[#829AB1]',
      'bg-[#627D98]',
      'bg-[#486581]',
      'bg-[#334E68]',
      'bg-[#243B53]',
      'bg-[#102A43]',
    ],

    supporting: [
      'bg-[#E3F8FF]',
      'bg-[#B3ECFF]',
      'bg-[#81DEFD]',
      'bg-[#5ED0FA]',
      'bg-[#40C3F7]',
      'bg-[#2BB0ED]',
      'bg-[#1992D4]',
      'bg-[#127FBF]',
      'bg-[#0B69A3]',
      'bg-[#035388]',
      'break',
      'bg-[#FFE3E3]',
      'bg-[#FFBDBD]',
      'bg-[#FF9B9B]',
      'bg-[#F86A6A]',
      'bg-[#EF4E4E]',
      'bg-[#E12D39]',
      'bg-[#CF1124]',
      'bg-[#AB091E]',
      'bg-[#8A041A]',
      'bg-[#610316]',
      'break',
      'bg-[#FFFBEA]',
      'bg-[#FFF3C4]',
      'bg-[#FCE588]',
      'bg-[#FADB5F]',
      'bg-[#F7C948]',
      'bg-[#F0B429]',
      'bg-[#DE911D]',
      'bg-[#CB6E17]',
      'bg-[#B44D12]',
      'bg-[#8D2B0B]',
    ],
  },
  palette4: {
    image: paletteImage4,
    numOfPalette: 4,
    primary: [
      'bg-teal-50',
      'bg-teal-100',
      'bg-teal-200',
      'bg-teal-300',
      'bg-teal-400',
      'bg-teal-500',
      'bg-teal-600',
      'bg-teal-700',
      'bg-teal-800',
      'bg-teal-900',
      'bg-teal-950',
    ],
    neutrals: [
      'bg-[#F0F4F8]',
      'bg-[#D9E2EC]',
      'bg-[#BCCCDC]',
      'bg-[#9FB3C8]',
      'bg-[#829AB1]',
      'bg-[#627D98]',
      'bg-[#486581]',
      'bg-[#334E68]',
      'bg-[#243B53]',
      'bg-[#102A43]',
    ],
    supporting: [
      'bg-blue-50',
      'bg-blue-100',
      'bg-blue-200',
      'bg-blue-300',
      'bg-blue-400',
      'bg-blue-500',
      'bg-blue-600',
      'bg-blue-700',
      'bg-blue-800',
      'bg-blue-900',
      'bg-blue-950',
      'break',
      'bg-purple-50',
      'bg-purple-100',
      'bg-purple-200',
      'bg-purple-300',
      'bg-purple-400',
      'bg-purple-500',
      'bg-purple-600',
      'bg-purple-700',
      'bg-purple-800',
      'bg-purple-900',
      'bg-purple-950',
      'break',
      'bg-red-50',
      'bg-red-100',
      'bg-red-200',
      'bg-red-300',
      'bg-red-400',
      'bg-red-500',
      'bg-red-600',
      'bg-red-700',
      'bg-red-800',
      'bg-red-900',
      'bg-red-950',
      'break',
      'bg-yellow-50',
      'bg-yellow-100',
      'bg-yellow-200',
      'bg-yellow-300',
      'bg-yellow-400',
      'bg-yellow-500',
      'bg-yellow-600',
      'bg-yellow-700',
      'bg-yellow-800',
      'bg-yellow-900',
      'bg-yellow-950',
    ],
  },
  palette5: {
    image: paletteImage5,
    numOfPalette: 5,
    primary: [
      'bg-[#F0F4F8]',
      'bg-[#D9E2EC]',
      'bg-[#BCCCDC]',
      'bg-[#9FB3C8]',
      'bg-[#829AB1]',
      'bg-[#627D98]',
      'bg-[#486581]',
      'bg-[#334E68]',
      'bg-[#243B53]',
      'bg-[#102A43]',
    ],
    neutrals: [
      'bg-[#F0F4F8]',
      'bg-[#D9E2EC]',
      'bg-[#BCCCDC]',
      'bg-[#9FB3C8]',
      'bg-[#829AB1]',
      'bg-[#627D98]',
      'bg-[#486581]',
      'bg-[#334E68]',
      'bg-[#243B53]',
      'bg-[#102A43]',
    ],
    supporting: [
      'bg-[#E3F8FF]',
      'bg-[#B3ECFF]',
      'bg-[#81DEFD]',
      'bg-[#5ED0FA]',
      'bg-[#40C3F7]',
      'bg-[#2BB0ED]',
      'bg-[#1992D4]',
      'bg-[#127FBF]',
      'bg-[#0B69A3]',
      'bg-[#035388]',
      'break',
      'bg-cyan-50',
      'bg-cyan-100',
      'bg-cyan-200',
      'bg-cyan-300',
      'bg-cyan-400',
      'bg-cyan-500',
      'bg-cyan-600',
      'bg-cyan-700',
      'bg-cyan-800',
      'bg-cyan-900',
      'bg-cyan-950',
      'break',
      'bg-[#FFE3EC]',
      'bg-[#FFB8D2]',
      'bg-[#FF8CBA]',
      'bg-[#F364A2]',
      'bg-[#E8368F]',
      'bg-[#DA127D]',
      'bg-[#BC0A6F]',
      'bg-[#A30664]',
      'bg-[#870557]',
      'bg-[#620042]',
      'break',
      'bg-[#FFE3E3]',
      'bg-[#FFBDBD]',
      'bg-[#FF9B9B]',
      'bg-[#F86A6A]',
      'bg-[#EF4E4E]',
      'bg-[#E12D39]',
      'bg-[#CF1124]',
      'bg-[#AB091E]',
      'bg-[#8A041A]',
      'bg-[#610316]',
      'break',
      'bg-[#FFFBEA]',
      'bg-[#FFF3C4]',
      'bg-[#FCE588]',
      'bg-[#FADB5F]',
      'bg-[#F7C948]',
      'bg-[#F0B429]',
      'bg-[#DE911D]',
      'bg-[#CB6E17]',
      'bg-[#B44D12]',
      'bg-[#8D2B0B]',
      'break',
      'bg-teal-50',
      'bg-teal-100',
      'bg-teal-200',
      'bg-teal-300',
      'bg-teal-400',
      'bg-teal-500',
      'bg-teal-600',
      'bg-teal-700',
      'bg-teal-800',
      'bg-teal-900',
      'bg-teal-950',
    ],
  },
  palette6: {
    image: paletteImage6,
    numOfPalette: 6,
    primary: [
      'bg-red-50',
      'bg-red-100',
      'bg-red-200',
      'bg-red-300',
      'bg-red-400',
      'bg-red-500',
      'bg-red-600',
      'bg-red-700',
      'bg-red-800',
      'bg-red-900',
      'bg-red-950',
      'break',
      'bg-[#FFFBEA]',
      'bg-[#FFF3C4]',
      'bg-[#FCE588]',
      'bg-[#FADB5F]',
      'bg-[#F7C948]',
      'bg-[#F0B429]',
      'bg-[#DE911D]',
      'bg-[#CB6E17]',
      'bg-[#B44D12]',
      'bg-[#8D2B0B]',
    ],
    neutrals: [
      'bg-[#FAF9F7]',
      'bg-[#E8E6E1]',
      'bg-[#D3CEC4]',
      'bg-[#B8B2A7]',
      'bg-[#A39E93]',
      'bg-[#857F72]',
      'bg-[#625D52]',
      'bg-[#504A40]',
      'bg-[#423D33]',
      'bg-[#27241D]',
    ],
    supporting: [
      'bg-cyan-50',
      'bg-cyan-100',
      'bg-cyan-200',
      'bg-cyan-300',
      'bg-cyan-400',
      'bg-cyan-500',
      'bg-cyan-600',
      'bg-cyan-700',
      'bg-cyan-800',
      'bg-cyan-900',
      'bg-cyan-950',
      'break',
      'bg-[#F2FDE0]',
      'bg-[#E2F7C2]',
      'bg-[#C7EA8F]',
      'bg-[#ABDB5E]',
      'bg-[#94C843]',
      'bg-[#7BB026]',
      'bg-[#63921A]',
      'bg-[#507712]',
      'bg-[#42600C]',
      'bg-[#2B4005]',
    ],
  },
  palette7: {
    image: paletteImage7,
    numOfPalette: 7,
    primary: [
      'bg-cyan-50',
      'bg-cyan-100',
      'bg-cyan-200',
      'bg-cyan-300',
      'bg-cyan-400',
      'bg-cyan-500',
      'bg-cyan-600',
      'bg-cyan-700',
      'bg-cyan-800',
      'bg-cyan-900',
      'bg-cyan-950',
    ],
    neutrals: [
      'bg-[#FAF9F7]',
      'bg-[#E8E6E1]',
      'bg-[#D3CEC4]',
      'bg-[#B8B2A7]',
      'bg-[#A39E93]',
      'bg-[#857F72]',
      'bg-[#625D52]',
      'bg-[#504A40]',
      'bg-[#423D33]',
      'bg-[#27241D]',
    ],
    supporting: [
      'bg-blue-50',
      'bg-blue-100',
      'bg-blue-200',
      'bg-blue-300',
      'bg-blue-400',
      'bg-blue-500',
      'bg-blue-600',
      'bg-blue-700',
      'bg-blue-800',
      'bg-blue-900',
      'bg-blue-950',
      'break',
      'bg-red-50',
      'bg-red-100',
      'bg-red-200',
      'bg-red-300',
      'bg-red-400',
      'bg-red-500',
      'bg-red-600',
      'bg-red-700',
      'bg-red-800',
      'bg-red-900',
      'bg-red-950',
      'break',
      'bg-yellow-50',
      'bg-yellow-100',
      'bg-yellow-200',
      'bg-yellow-300',
      'bg-yellow-400',
      'bg-yellow-500',
      'bg-yellow-600',
      'bg-yellow-700',
      'bg-yellow-800',
      'bg-yellow-900',
      'bg-yellow-950',
      'break',
      'bg-teal-50',
      'bg-teal-100',
      'bg-teal-200',
      'bg-teal-300',
      'bg-teal-400',
      'bg-teal-500',
      'bg-teal-600',
      'bg-teal-700',
      'bg-teal-800',
      'bg-teal-900',
      'bg-teal-950',
    ],
  },
  palette8: {
    image: paletteImage8,
    numOfPalette: 8,
    primary: [
      'bg-[#E6F6FF]',
      'bg-[#BAE3FF]',
      'bg-[#7CC4FA]',
      'bg-[#47A3F3]',
      'bg-[#2186EB]',
      'bg-[#0967D2]',
      'bg-[#0552B5]',
      'bg-[#03449E]',
      'bg-[#01337D]',
      'bg-[#002159]',
    ],
    neutrals: [
      'bg-[#F5F7FA]',
      'bg-[#E4E7EB]',
      'bg-[#CBD2D9]',
      'bg-[#9AA5B1]',
      'bg-[#7B8794]',
      'bg-[#616E7C]',
      'bg-[#52606D]',
      'bg-[#3E4C59]',
      'bg-[#323F4B]',
      'bg-[#1F2933]',
    ],
    supporting: [
      'bg-[#E1FCF8]',
      'bg-[#C1FEF6]',
      'bg-[#92FDF2]',
      'bg-[#62F4EB]',
      'bg-[#3AE7E1]',
      'bg-[#1CD4D4]',
      'bg-[#0FB5BA]',
      'bg-[#099AA4]',
      'bg-[#07818F]',
      'bg-[#05606E]',
      'break',
      'bg-[#FFE8D9]',
      'bg-[#FFD0B5]',
      'bg-[#FFB088]',
      'bg-[#FF9466]',
      'bg-[#F9703E]',
      'bg-[#F35627]',
      'bg-[#DE3A11]',
      'bg-[#C52707]',
      'bg-[#AD1D07]',
      'bg-[#841003]',
      'break',
      'bg-[#FFE3E3]',
      'bg-[#FFBDBD]',
      'bg-[#FF9B9B]',
      'bg-[#F86A6A]',
      'bg-[#EF4E4E]',
      'bg-[#E12D39]',
      'bg-[#CF1124]',
      'bg-[#AB091E]',
      'bg-[#8A041A]',
      'bg-[#610316]',
      'break',
      'bg-[#FFFBEA]',
      'bg-[#FFF3C4]',
      'bg-[#FCE588]',
      'bg-[#FADB5F]',
      'bg-[#F7C948]',
      'bg-[#F0B429]',
      'bg-[#DE911D]',
      'bg-[#CB6E17]',
      'bg-[#B44D12]',
      'bg-[#8D2B0B]',
    ],
  },
  palette9: {
    image: paletteImage9,
    numOfPalette: 9,
    primary: [
      'bg-[#E3F8FF]',
      'bg-[#B3ECFF]',
      'bg-[#81DEFD]',
      'bg-[#5ED0FA]',
      'bg-[#40C3F7]',
      'bg-[#2BB0ED]',
      'bg-[#1992D4]',
      'bg-[#127FBF]',
      'bg-[#0B69A3]',
      'bg-[#035388]',
    ],
    neutrals: [
      'bg-[#F5F7FA]',
      'bg-[#E4E7EB]',
      'bg-[#CBD2D9]',
      'bg-[#9AA5B1]',
      'bg-[#7B8794]',
      'bg-[#616E7C]',
      'bg-[#52606D]',
      'bg-[#3E4C59]',
      'bg-[#323F4B]',
      'bg-[#1F2933]',
    ],
    supporting: [
      'bg-[#FFE3EC]',
      'bg-[#FFB8D2]',
      'bg-[#FF8CBA]',
      'bg-[#F364A2]',
      'bg-[#E8368F]',
      'bg-[#DA127D]',
      'bg-[#BC0A6F]',
      'bg-[#A30664]',
      'bg-[#870557]',
      'bg-[#620042]',
      'break',
      'bg-[#FFE3E3]',
      'bg-[#FFBDBD]',
      'bg-[#FF9B9B]',
      'bg-[#F86A6A]',
      'bg-[#EF4E4E]',
      'bg-[#E12D39]',
      'bg-[#CF1124]',
      'bg-[#AB091E]',
      'bg-[#8A041A]',
      'bg-[#610316]',
      'break',
      'bg-[#FFFBEA]',
      'bg-[#FFF3C4]',
      'bg-[#FCE588]',
      'bg-[#FADB5F]',
      'bg-[#F7C948]',
      'bg-[#F0B429]',
      'bg-[#DE911D]',
      'bg-[#CB6E17]',
      'bg-[#B44D12]',
      'bg-[#8D2B0B]',
      'break',
      'bg-[#EFFCF6]',
      'bg-[#C6F7E2]',
      'bg-[#8EEDC7]',
      'bg-[#65D6AD]',
      'bg-[#3EBD93]',
      'bg-[#27AB83]',
      'bg-[#199473]',
      'bg-[#147D64]',
      'bg-[#0C6B58]',
      'bg-[#014D40]',
    ],
  },
  palette10: {
    image: paletteImage10,
    numOfPalette: 10,
    primary: [
      'bg-indigo-50',
      'bg-indigo-100',
      'bg-indigo-200',
      'bg-indigo-300',
      'bg-indigo-400',
      'bg-indigo-500',
      'bg-indigo-600',
      'bg-indigo-700',
      'bg-indigo-800',
      'bg-indigo-900',
      'bg-indigo-950',
    ],
    neutrals: [
      'bg-[#F5F7FA]',
      'bg-[#E4E7EB]',
      'bg-[#CBD2D9]',
      'bg-[#9AA5B1]',
      'bg-[#7B8794]',
      'bg-[#616E7C]',
      'bg-[#52606D]',
      'bg-[#3E4C59]',
      'bg-[#323F4B]',
      'bg-[#1F2933]',
    ],
    supporting: [
      'bg-[#E3F8FF]',
      'bg-[#B3ECFF]',
      'bg-[#81DEFD]',
      'bg-[#5ED0FA]',
      'bg-[#40C3F7]',
      'bg-[#2BB0ED]',
      'bg-[#1992D4]',
      'bg-[#127FBF]',
      'bg-[#0B69A3]',
      'bg-[#035388]',
      'break',
      'bg-[#FFE3E3]',
      'bg-[#FFBDBD]',
      'bg-[#FF9B9B]',
      'bg-[#F86A6A]',
      'bg-[#EF4E4E]',
      'bg-[#E12D39]',
      'bg-[#CF1124]',
      'bg-[#AB091E]',
      'bg-[#8A041A]',
      'bg-[#610316]',
      'break',
      'bg-[#FFFBEA]',
      'bg-[#FFF3C4]',
      'bg-[#FCE588]',
      'bg-[#FADB5F]',
      'bg-[#F7C948]',
      'bg-[#F0B429]',
      'bg-[#DE911D]',
      'bg-[#CB6E17]',
      'bg-[#B44D12]',
      'bg-[#8D2B0B]',
      'break',
      'bg-[#EFFCF6]',
      'bg-[#C6F7E2]',
      'bg-[#8EEDC7]',
      'bg-[#65D6AD]',
      'bg-[#3EBD93]',
      'bg-[#27AB83]',
      'bg-[#199473]',
      'bg-[#147D64]',
      'bg-[#0C6B58]',
      'bg-[#014D40]',
    ],
  },
  palette11: {
    image: paletteImage11,
    numOfPalette: 11,
    primary: [
      'bg-[#FFE3EC]',
      'bg-[#FFB8D2]',
      'bg-[#FF8CBA]',
      'bg-[#F364A2]',
      'bg-[#E8368F]',
      'bg-[#DA127D]',
      'bg-[#BC0A6F]',
      'bg-[#A30664]',
      'bg-[#870557]',
      'bg-[#620042]',
    ],
    neutrals: [
      'bg-[#F5F7FA]',
      'bg-[#E4E7EB]',
      'bg-[#CBD2D9]',
      'bg-[#9AA5B1]',
      'bg-[#7B8794]',
      'bg-[#616E7C]',
      'bg-[#52606D]',
      'bg-[#3E4C59]',
      'bg-[#323F4B]',
      'bg-[#1F2933]',
    ],
    supporting: [
      'bg-[#F2EBFE]',
      'bg-[#DAC4FF]',
      'bg-[#B990FF]',
      'bg-[#A368FC]',
      'bg-[#9446ED]',
      'bg-[#8719E0]',
      'bg-[#7A0ECC]',
      'bg-[#690CB0]',
      'bg-[#580A94]',
      'bg-[#44056E]',
      'break',
      'bg-[#E1FCF8]',
      'bg-[#C1FEF6]',
      'bg-[#92FDF2]',
      'bg-[#62F4EB]',
      'bg-[#3AE7E1]',
      'bg-[#1CD4D4]',
      'bg-[#0FB5BA]',
      'bg-[#099AA4]',
      'bg-[#07818F]',
      'bg-[#05606E]',
      'break',
      'bg-[#FFE3E3]',
      'bg-[#FFBDBD]',
      'bg-[#FF9B9B]',
      'bg-[#F86A6A]',
      'bg-[#EF4E4E]',
      'bg-[#E12D39]',
      'bg-[#CF1124]',
      'bg-[#AB091E]',
      'bg-[#8A041A]',
      'bg-[#610316]',
      'break',
      'bg-[#FFFBEA]',
      'bg-[#FFF3C4]',
      'bg-[#FCE588]',
      'bg-[#FADB5F]',
      'bg-[#F7C948]',
      'bg-[#F0B429]',
      'bg-[#DE911D]',
      'bg-[#CB6E17]',
      'bg-[#B44D12]',
      'bg-[#8D2B0B]',
    ],
  },
  palette12: {
    image: paletteImage12,
    numOfPalette: 12,
    primary: [
      'bg-green-50',
      'bg-green-100',
      'bg-green-200',
      'bg-green-300',
      'bg-green-400',
      'bg-green-500',
      'bg-green-600',
      'bg-green-700',
      'bg-green-800',
      'bg-green-900',
      'bg-green-950',
    ],
    neutrals: [
      'bg-gray-50',
      'bg-gray-100',
      'bg-gray-200',
      'bg-gray-300',
      'bg-gray-400',
      'bg-gray-500',
      'bg-gray-600',
      'bg-gray-700',
      'bg-gray-800',
      'bg-gray-900',
      'bg-gray-950',
    ],
    supporting: [
      'bg-purple-50',
      'bg-purple-100',
      'bg-purple-200',
      'bg-purple-300',
      'bg-purple-400',
      'bg-purple-500',
      'bg-purple-600',
      'bg-purple-700',
      'bg-purple-800',
      'bg-purple-900',
      'bg-purple-950',
      'break',
      'bg-red-50',
      'bg-red-100',
      'bg-red-200',
      'bg-red-300',
      'bg-red-400',
      'bg-red-500',
      'bg-red-600',
      'bg-red-700',
      'bg-red-800',
      'bg-red-900',
      'bg-red-950',
      'break',
      'bg-yellow-50',
      'bg-yellow-100',
      'bg-yellow-200',
      'bg-yellow-300',
      'bg-yellow-400',
      'bg-yellow-500',
      'bg-yellow-600',
      'bg-yellow-700',
      'bg-yellow-800',
      'bg-yellow-900',
      'bg-yellow-950',
    ],
  },
  palette13: {
    image: paletteImage13,
    numOfPalette: 13,
    primary: [
      'bg-[#FFFBEA]',
      'bg-[#FFF3C4]',
      'bg-[#FCE588]',
      'bg-[#FADB5F]',
      'bg-[#F7C948]',
      'bg-[#F0B429]',
      'bg-[#DE911D]',
      'bg-[#CB6E17]',
      'bg-[#B44D12]',
      'bg-[#8D2B0B]',
      'break',
      'bg-[#E3F8FF]',
      'bg-[#B3ECFF]',
      'bg-[#81DEFD]',
      'bg-[#5ED0FA]',
      'bg-[#40C3F7]',
      'bg-[#2BB0ED]',
      'bg-[#1992D4]',
      'bg-[#127FBF]',
      'bg-[#0B69A3]',
      'bg-[#035388]',
    ],
    neutrals: [
      'bg-gray-50',
      'bg-gray-100',
      'bg-gray-200',
      'bg-gray-300',
      'bg-gray-400',
      'bg-gray-500',
      'bg-gray-600',
      'bg-gray-700',
      'bg-gray-800',
      'bg-gray-900',
      'bg-gray-950',
    ],
    supporting: [
      'bg-[#FFE3E3]',
      'bg-[#FFBDBD]',
      'bg-[#FF9B9B]',
      'bg-[#F86A6A]',
      'bg-[#EF4E4E]',
      'bg-[#E12D39]',
      'bg-[#CF1124]',
      'bg-[#AB091E]',
      'bg-[#8A041A]',
      'bg-[#610316]',
      'break',
      'bg-teal-50',
      'bg-teal-100',
      'bg-teal-200',
      'bg-teal-300',
      'bg-teal-400',
      'bg-teal-500',
      'bg-teal-600',
      'bg-teal-700',
      'bg-teal-800',
      'bg-teal-900',
      'bg-teal-950',
    ],
  },
  palette14: {
    image: paletteImage14,
    numOfPalette: 14,
    primary: [
      'bg-orange-50',
      'bg-orange-100',
      'bg-orange-200',
      'bg-orange-300',
      'bg-orange-400',
      'bg-orange-500',
      'bg-orange-600',
      'bg-orange-700',
      'bg-orange-800',
      'bg-orange-900',
      'bg-orange-950',
      'break',
      'bg-[#F2FDE0]',
      'bg-[#E2F7C2]',
      'bg-[#C7EA8F]',
      'bg-[#ABDB5E]',
      'bg-[#94C843]',
      'bg-[#7BB026]',
      'bg-[#63921A]',
      'bg-[#507712]',
      'bg-[#42600C]',
      'bg-[#2B4005]',
    ],
    neutrals: [
      'bg-gray-50',
      'bg-gray-100',
      'bg-gray-200',
      'bg-gray-300',
      'bg-gray-400',
      'bg-gray-500',
      'bg-gray-600',
      'bg-gray-700',
      'bg-gray-800',
      'bg-gray-900',
      'bg-gray-950',
    ],
    supporting: [
      'bg-[#EBF8FF]',
      'bg-[#D1EEFC]',
      'bg-[#A7D8F0]',
      'bg-[#7CC1E4]',
      'bg-[#55AAD4]',
      'bg-[#3994C1]',
      'bg-[#2D83AE]',
      'bg-[#1D6F98]',
      'bg-[#166086]',
      'bg-[#0B4F71]',
      'break',
      'bg-red-50',
      'bg-red-100',
      'bg-red-200',
      'bg-red-300',
      'bg-red-400',
      'bg-red-500',
      'bg-red-600',
      'bg-red-700',
      'bg-red-800',
      'bg-red-900',
      'bg-red-950',
      'break',
      'bg-yellow-50',
      'bg-yellow-100',
      'bg-yellow-200',
      'bg-yellow-300',
      'bg-yellow-400',
      'bg-yellow-500',
      'bg-yellow-600',
      'bg-yellow-700',
      'bg-yellow-800',
      'bg-yellow-900',
      'bg-yellow-950',
    ],
  },
  palette15: {
    image: paletteImage15,
    numOfPalette: 15,
    primary: [
      'bg-blue-50',
      'bg-blue-100',
      'bg-blue-200',
      'bg-blue-300',
      'bg-blue-400',
      'bg-blue-500',
      'bg-blue-600',
      'bg-blue-700',
      'bg-blue-800',
      'bg-blue-900',
      'bg-blue-950',
    ],
    neutrals: [
      'bg-[#F0F4F8]',
      'bg-[#D9E2EC]',
      'bg-[#BCCCDC]',
      'bg-[#9FB3C8]',
      'bg-[#829AB1]',
      'bg-[#627D98]',
      'bg-[#486581]',
      'bg-[#334E68]',
      'bg-[#243B53]',
      'bg-[#102A43]',
    ],
    supporting: [
      'bg-[#F0FCF9]',
      'bg-[#C6F7E9]',
      'bg-[#8EEDD1]',
      'bg-[#5FE3C0]',
      'bg-[#2DCCA7]',
      'bg-[#17B897]',
      'bg-[#079A82]',
      'bg-[#048271]',
      'bg-[#016457]',
      'bg-[#004440]',
      'break',
      'bg-red-50',
      'bg-red-100',
      'bg-red-200',
      'bg-red-300',
      'bg-red-400',
      'bg-red-500',
      'bg-red-600',
      'bg-red-700',
      'bg-red-800',
      'bg-red-900',
      'bg-red-950',
      'break',
      'bg-yellow-50',
      'bg-yellow-100',
      'bg-yellow-200',
      'bg-yellow-300',
      'bg-yellow-400',
      'bg-yellow-500',
      'bg-yellow-600',
      'bg-yellow-700',
      'bg-yellow-800',
      'bg-yellow-900',
      'bg-yellow-950',
    ],
  },
  palette16: {
    image: paletteImage16,
    numOfPalette: 16,
    primary: [
      'bg-purple-50',
      'bg-purple-100',
      'bg-purple-200',
      'bg-purple-300',
      'bg-purple-400',
      'bg-purple-500',
      'bg-purple-600',
      'bg-purple-700',
      'bg-purple-800',
      'bg-purple-900',
      'bg-purple-950',
      'break',
      'bg-[#FFE3E3]',
      'bg-[#FFBDBD]',
      'bg-[#FF9B9B]',
      'bg-[#F86A6A]',
      'bg-[#EF4E4E]',
      'bg-[#E12D39]',
      'bg-[#CF1124]',
      'bg-[#AB091E]',
      'bg-[#8A041A]',
      'bg-[#610316]',
    ],
    neutrals: [
      'bg-[#F0F4F8]',
      'bg-[#D9E2EC]',
      'bg-[#BCCCDC]',
      'bg-[#9FB3C8]',
      'bg-[#829AB1]',
      'bg-[#627D98]',
      'bg-[#486581]',
      'bg-[#334E68]',
      'bg-[#243B53]',
      'bg-[#102A43]',
    ],
    supporting: [
      'bg-[#F0FCF9]',
      'bg-[#C6F7E9]',
      'bg-[#8EEDD1]',
      'bg-[#5FE3C0]',
      'bg-[#2DCCA7]',
      'bg-[#17B897]',
      'bg-[#079A82]',
      'bg-[#048271]',
      'bg-[#016457]',
      'bg-[#004440]',
      'break',
      'bg-[#FFFBEA]',
      'bg-[#FFF3C4]',
      'bg-[#FCE588]',
      'bg-[#FADB5F]',
      'bg-[#F7C948]',
      'bg-[#F0B429]',
      'bg-[#DE911D]',
      'bg-[#CB6E17]',
      'bg-[#B44D12]',
      'bg-[#8D2B0B]',
    ],
  },
  palette17: {
    image: paletteImage17,
    numOfPalette: 17,
    primary: [
      'bg-[#F5E1F7]',
      'bg-[#ECBDF2]',
      'bg-[#CE80D9]',
      'bg-[#BB61C7]',
      'bg-[#AD4BB8]',
      'bg-[#A23DAD]',
      'bg-[#90279C]',
      'bg-[#7C1A87]',
      'bg-[#671270]',
      'bg-[#4E0754]',
      'break',
      'bg-[#FFE8D9]',
      'bg-[#FFD0B5]',
      'bg-[#FFB088]',
      'bg-[#FF9466]',
      'bg-[#F9703E]',
      'bg-[#F35627]',
      'bg-[#DE3A11]',
      'bg-[#C52707]',
      'bg-[#AD1D07]',
      'bg-[#841003]',
    ],
    neutrals: [
      'bg-[#F0F4F8]',
      'bg-[#D9E2EC]',
      'bg-[#BCCCDC]',
      'bg-[#9FB3C8]',
      'bg-[#829AB1]',
      'bg-[#627D98]',
      'bg-[#486581]',
      'bg-[#334E68]',
      'bg-[#243B53]',
      'bg-[#102A43]',
    ],
    supporting: [
      'bg-[#FFFBEA]',
      'bg-[#FFF3C4]',
      'bg-[#FCE588]',
      'bg-[#FADB5F]',
      'bg-[#F7C948]',
      'bg-[#F0B429]',
      'bg-[#DE911D]',
      'bg-[#CB6E17]',
      'bg-[#B44D12]',
      'bg-[#8D2B0B]',
      'break',
      'bg-[#FFE3E3]',
      'bg-[#FFBDBD]',
      'bg-[#FF9B9B]',
      'bg-[#F86A6A]',
      'bg-[#EF4E4E]',
      'bg-[#E12D39]',
      'bg-[#CF1124]',
      'bg-[#AB091E]',
      'bg-[#8A041A]',
      'bg-[#610316]',
      'break',
      'bg-[#E3F9E5]',
      'bg-[#C1F2C7]',
      'bg-[#91E697]',
      'bg-[#51CA58]',
      'bg-[#31B237]',
      'bg-[#18981D]',
      'bg-[#0F8613]',
      'bg-[#0E7817]',
      'bg-[#07600E]',
      'bg-[#014807]',
    ],
  },
  palette18: {
    image: paletteImage18,
    numOfPalette: 18,
    primary: [
      'bg-purple-50',
      'bg-purple-100',
      'bg-purple-200',
      'bg-purple-300',
      'bg-purple-400',
      'bg-purple-500',
      'bg-purple-600',
      'bg-purple-700',
      'bg-purple-800',
      'bg-purple-900',
      'bg-purple-950',
    ],
    neutrals: [
      'bg-[#FAF9F7]',
      'bg-[#E8E6E1]',
      'bg-[#D3CEC4]',
      'bg-[#B8B2A7]',
      'bg-[#A39E93]',
      'bg-[#857F72]',
      'bg-[#625D52]',
      'bg-[#504A40]',
      'bg-[#423D33]',
      'bg-[#27241D]',
    ],
    supporting: [
      'bg-cyan-50',
      'bg-cyan-100',
      'bg-cyan-200',
      'bg-cyan-300',
      'bg-cyan-400',
      'bg-cyan-500',
      'bg-cyan-600',
      'bg-cyan-700',
      'bg-cyan-800',
      'bg-cyan-900',
      'bg-cyan-950',
      'break',
      'bg-[#FFE3E3]',
      'bg-[#FFBDBD]',
      'bg-[#FF9B9B]',
      'bg-[#F86A6A]',
      'bg-[#EF4E4E]',
      'bg-[#E12D39]',
      'bg-[#CF1124]',
      'bg-[#AB091E]',
      'bg-[#8A041A]',
      'bg-[#610316]',
      'break',
      'bg-yellow-50',
      'bg-yellow-100',
      'bg-yellow-200',
      'bg-yellow-300',
      'bg-yellow-400',
      'bg-yellow-500',
      'bg-yellow-600',
      'bg-yellow-700',
      'bg-yellow-800',
      'bg-yellow-900',
      'bg-yellow-950',
      'break',
      'bg-[#E3F9E5]',
      'bg-[#C1F2C7]',
      'bg-[#91E697]',
      'bg-[#51CA58]',
      'bg-[#31B237]',
      'bg-[#18981D]',
      'bg-[#0F8613]',
      'bg-[#0E7817]',
      'bg-[#07600E]',
      'bg-[#014807]',
    ],
  },
  palette19: {
    image: paletteImage19,
    numOfPalette: 19,
    primary: [
      'bg-indigo-50',
      'bg-indigo-100',
      'bg-indigo-200',
      'bg-indigo-300',
      'bg-indigo-400',
      'bg-indigo-500',
      'bg-indigo-600',
      'bg-indigo-700',
      'bg-indigo-800',
      'bg-indigo-900',
      'bg-indigo-950',
      'break',
      'bg-[#FFE8D9]',
      'bg-[#FFD0B5]',
      'bg-[#FFB088]',
      'bg-[#FF9466]',
      'bg-[#F9703E]',
      'bg-[#F35627]',
      'bg-[#DE3A11]',
      'bg-[#C52707]',
      'bg-[#AD1D07]',
      'bg-[#841003]',
    ],
    neutrals: [
      'bg-[#F5F7FA]',
      'bg-[#E4E7EB]',
      'bg-[#CBD2D9]',
      'bg-[#9AA5B1]',
      'bg-[#7B8794]',
      'bg-[#616E7C]',
      'bg-[#52606D]',
      'bg-[#3E4C59]',
      'bg-[#323F4B]',
      'bg-[#1F2933]',
    ],
    supporting: [
      'bg-[#FDEBFF]',
      'bg-[#F8C4FE]',
      'bg-[#F48FFF]',
      'bg-[#F368FC]',
      'bg-[#ED47ED]',
      'bg-[#E019D0]',
      'bg-[#CB10B8]',
      'bg-[#B30BA3]',
      'bg-[#960888]',
      'bg-[#6E0560]',
      'break',
      'bg-[#FFE3E3]',
      'bg-[#FFBDBD]',
      'bg-[#FF9B9B]',
      'bg-[#F86A6A]',
      'bg-[#EF4E4E]',
      'bg-[#E12D39]',
      'bg-[#CF1124]',
      'bg-[#AB091E]',
      'bg-[#8A041A]',
      'bg-[#610316]',
      'break',
      'bg-[#FFFBEA]',
      'bg-[#FFF3C4]',
      'bg-[#FCE588]',
      'bg-[#FADB5F]',
      'bg-[#F7C948]',
      'bg-[#F0B429]',
      'bg-[#DE911D]',
      'bg-[#CB6E17]',
      'bg-[#B44D12]',
      'bg-[#8D2B0B]',
      'break',
      'bg-[#E3F9E5]',
      'bg-[#C1F2C7]',
      'bg-[#91E697]',
      'bg-[#51CA58]',
      'bg-[#31B237]',
      'bg-[#18981D]',
      'bg-[#0F8613]',
      'bg-[#0E7817]',
      'bg-[#07600E]',
      'bg-[#014807]',
    ],
  },
  palette20: {
    image: paletteImage20,
    numOfPalette: 20,
    primary: [
      'bg-[#EBF8FF]',
      'bg-[#D1EEFC]',
      'bg-[#A7D8F0]',
      'bg-[#7CC1E4]',
      'bg-[#55AAD4]',
      'bg-[#3994C1]',
      'bg-[#2D83AE]',
      'bg-[#1D6F98]',
      'bg-[#166086]',
      'bg-[#0B4F71]',
      'break',
      'bg-green-50',
      'bg-green-100',
      'bg-green-200',
      'bg-green-300',
      'bg-green-400',
      'bg-green-500',
      'bg-green-600',
      'bg-green-700',
      'bg-green-800',
      'bg-green-900',
      'bg-green-950',
    ],
    neutrals: [
      'bg-[#F5F7FA]',
      'bg-[#E4E7EB]',
      'bg-[#CBD2D9]',
      'bg-[#9AA5B1]',
      'bg-[#7B8794]',
      'bg-[#616E7C]',
      'bg-[#52606D]',
      'bg-[#3E4C59]',
      'bg-[#323F4B]',
      'bg-[#1F2933]',
    ],
    supporting: [
      'bg-purple-50',
      'bg-purple-100',
      'bg-purple-200',
      'bg-purple-300',
      'bg-purple-400',
      'bg-purple-500',
      'bg-purple-600',
      'bg-purple-700',
      'bg-purple-800',
      'bg-purple-900',
      'bg-purple-950',
      'break',
      'bg-red-50',
      'bg-red-100',
      'bg-red-200',
      'bg-red-300',
      'bg-red-400',
      'bg-red-500',
      'bg-red-600',
      'bg-red-700',
      'bg-red-800',
      'bg-red-900',
      'bg-red-950',
      'break',
      'bg-yellow-50',
      'bg-yellow-100',
      'bg-yellow-200',
      'bg-yellow-300',
      'bg-yellow-400',
      'bg-yellow-500',
      'bg-yellow-600',
      'bg-yellow-700',
      'bg-yellow-800',
      'bg-yellow-900',
      'bg-yellow-950',
    ],
  },
  palette21: {
    image: paletteImage21,
    numOfPalette: 21,
    primary: [
      'bg-[#FFE8D9]',
      'bg-[#FFD0B5]',
      'bg-[#FFB088]',
      'bg-[#FF9466]',
      'bg-[#F9703E]',
      'bg-[#F35627]',
      'bg-[#DE3A11]',
      'bg-[#C52707]',
      'bg-[#AD1D07]',
      'bg-[#841003]',
    ],
    neutrals: [
      'bg-[#F5F7FA]',
      'bg-[#E4E7EB]',
      'bg-[#CBD2D9]',
      'bg-[#9AA5B1]',
      'bg-[#7B8794]',
      'bg-[#616E7C]',
      'bg-[#52606D]',
      'bg-[#3E4C59]',
      'bg-[#323F4B]',
      'bg-[#1F2933]',
    ],
    supporting: [
      'bg-indigo-50',
      'bg-indigo-100',
      'bg-indigo-200',
      'bg-indigo-300',
      'bg-indigo-400',
      'bg-indigo-500',
      'bg-indigo-600',
      'bg-indigo-700',
      'bg-indigo-800',
      'bg-indigo-900',
      'bg-indigo-950',
      'break',
      'bg-red-50',
      'bg-red-100',
      'bg-red-200',
      'bg-red-300',
      'bg-red-400',
      'bg-red-500',
      'bg-red-600',
      'bg-red-700',
      'bg-red-800',
      'bg-red-900',
      'bg-red-950',
      'break',
      'bg-yellow-50',
      'bg-yellow-100',
      'bg-yellow-200',
      'bg-yellow-300',
      'bg-yellow-400',
      'bg-yellow-500',
      'bg-yellow-600',
      'bg-yellow-700',
      'bg-yellow-800',
      'bg-yellow-900',
      'bg-yellow-950',
      'break',
      'bg-green-50',
      'bg-green-100',
      'bg-green-200',
      'bg-green-300',
      'bg-green-400',
      'bg-green-500',
      'bg-green-600',
      'bg-green-700',
      'bg-green-800',
      'bg-green-900',
      'bg-green-950',
    ],
  },
  palette22: {
    image: paletteImage22,
    numOfPalette: 22,
    primary: [
      'bg-indigo-50',
      'bg-indigo-100',
      'bg-indigo-200',
      'bg-indigo-300',
      'bg-indigo-400',
      'bg-indigo-500',
      'bg-indigo-600',
      'bg-indigo-700',
      'bg-indigo-800',
      'bg-indigo-900',
      'bg-indigo-950',
      'break',
      'bg-[#E1FCF8]',
      'bg-[#C1FEF6]',
      'bg-[#92FDF2]',
      'bg-[#62F4EB]',
      'bg-[#3AE7E1]',
      'bg-[#1CD4D4]',
      'bg-[#0FB5BA]',
      'bg-[#099AA4]',
      'bg-[#07818F]',
      'bg-[#05606E]',
    ],
    neutrals: [
      'bg-[#F5F7FA]',
      'bg-[#E4E7EB]',
      'bg-[#CBD2D9]',
      'bg-[#9AA5B1]',
      'bg-[#7B8794]',
      'bg-[#616E7C]',
      'bg-[#52606D]',
      'bg-[#3E4C59]',
      'bg-[#323F4B]',
      'bg-[#1F2933]',
    ],
    supporting: [
      'bg-[#FFE3EC]',
      'bg-[#FFB8D2]',
      'bg-[#FF8CBA]',
      'bg-[#F364A2]',
      'bg-[#E8368F]',
      'bg-[#DA127D]',
      'bg-[#BC0A6F]',
      'bg-[#A30664]',
      'bg-[#870557]',
      'bg-[#620042]',
      'break',
      'bg-[#FFE3E3]',
      'bg-[#FFBDBD]',
      'bg-[#FF9B9B]',
      'bg-[#F86A6A]',
      'bg-[#EF4E4E]',
      'bg-[#E12D39]',
      'bg-[#CF1124]',
      'bg-[#AB091E]',
      'bg-[#8A041A]',
      'bg-[#610316]',
      'break',
      'bg-[#FFFBEA]',
      'bg-[#FFF3C4]',
      'bg-[#FCE588]',
      'bg-[#FADB5F]',
      'bg-[#F7C948]',
      'bg-[#F0B429]',
      'bg-[#DE911D]',
      'bg-[#CB6E17]',
      'bg-[#B44D12]',
      'bg-[#8D2B0B]',
      'break',
      'bg-[#E3F9E5]',
      'bg-[#C1F2C7]',
      'bg-[#91E697]',
      'bg-[#51CA58]',
      'bg-[#31B237]',
      'bg-[#18981D]',
      'bg-[#0F8613]',
      'bg-[#0E7817]',
      'bg-[#07600E]',
      'bg-[#014807]',
    ],
  },
  palette23: {
    image: paletteImage23,
    numOfPalette: 23,
    primary: [
      'bg-[#F0FCF9]',
      'bg-[#C6F7E9]',
      'bg-[#8EEDD1]',
      'bg-[#5FE3C0]',
      'bg-[#2DCCA7]',
      'bg-[#17B897]',
      'bg-[#079A82]',
      'bg-[#048271]',
      'bg-[#016457]',
      'bg-[#004440]',
    ],
    neutrals: [
      'bg-gray-50',
      'bg-gray-100',
      'bg-gray-200',
      'bg-gray-300',
      'bg-gray-400',
      'bg-gray-500',
      'bg-gray-600',
      'bg-gray-700',
      'bg-gray-800',
      'bg-gray-900',
      'bg-gray-950',
    ],
    supporting: [
      'bg-[#FFFBEA]',
      'bg-[#FFF3C4]',
      'bg-[#FCE588]',
      'bg-[#FADB5F]',
      'bg-[#F7C948]',
      'bg-[#F0B429]',
      'bg-[#DE911D]',
      'bg-[#CB6E17]',
      'bg-[#B44D12]',
      'bg-[#8D2B0B]',
      'break',
      'bg-[#FFE3E3]',
      'bg-[#FFBDBD]',
      'bg-[#FF9B9B]',
      'bg-[#F86A6A]',
      'bg-[#EF4E4E]',
      'bg-[#E12D39]',
      'bg-[#CF1124]',
      'bg-[#AB091E]',
      'bg-[#8A041A]',
      'bg-[#610316]',
    ],
  },
  palette24: {
    image: paletteImage24,
    numOfPalette: 24,
    primary: [
      'bg-yellow-50',
      'bg-yellow-100',
      'bg-yellow-200',
      'bg-yellow-300',
      'bg-yellow-400',
      'bg-yellow-500',
      'bg-yellow-600',
      'bg-yellow-700',
      'bg-yellow-800',
      'bg-yellow-900',
      'bg-yellow-950',
    ],
    neutrals: [
      'bg-gray-50',
      'bg-gray-100',
      'bg-gray-200',
      'bg-gray-300',
      'bg-gray-400',
      'bg-gray-500',
      'bg-gray-600',
      'bg-gray-700',
      'bg-gray-800',
      'bg-gray-900',
      'bg-gray-950',
    ],
    supporting: [
      'bg-blue-50',
      'bg-blue-100',
      'bg-blue-200',
      'bg-blue-300',
      'bg-blue-400',
      'bg-blue-500',
      'bg-blue-600',
      'bg-blue-700',
      'bg-blue-800',
      'bg-blue-900',
      'bg-blue-950',
      'break',
      'bg-orange-50',
      'bg-orange-100',
      'bg-orange-200',
      'bg-orange-300',
      'bg-orange-400',
      'bg-orange-500',
      'bg-orange-600',
      'bg-orange-700',
      'bg-orange-800',
      'bg-orange-900',
      'bg-orange-950',
      'break',
      'bg-red-50',
      'bg-red-100',
      'bg-red-200',
      'bg-red-300',
      'bg-red-400',
      'bg-red-500',
      'bg-red-600',
      'bg-red-700',
      'bg-red-800',
      'bg-red-900',
      'bg-red-950',
      'break',
      'bg-green-50',
      'bg-green-100',
      'bg-green-200',
      'bg-green-300',
      'bg-green-400',
      'bg-green-500',
      'bg-green-600',
      'bg-green-700',
      'bg-green-800',
      'bg-green-900',
      'bg-green-950',
    ],
  },
};
