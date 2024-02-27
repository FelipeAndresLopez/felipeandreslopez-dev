interface Props {
  className?: string
}

export const BriefcaseIcon: React.FC<Props> = ({ className = 'size-7' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    stroke="#fff"
    version="1.1"
    viewBox="0 0 400 400"
    className={className}
  >
    <g>
      <g transform="translate(0 -652.362)">
        <path
          fill="#fff"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.004"
          d="M124.5 684.29v50.144H0v286h400v-286H275.5V684.29h-150zm25 25h101v25.144h-101zM25 759.434h31.5v100h287v-100H375v236H25zm56.5 0h237v75h-237zm106 25.506v25h25v-25z"
          opacity="1"
        ></path>
      </g>
    </g>
  </svg>
)
