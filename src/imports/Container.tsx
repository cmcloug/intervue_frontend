function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[13px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[normal] whitespace-pre-wrap">{`Accent & System`}</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ededed] text-[13px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Primary Accent</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">#3B82F6</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#1a1a1a] relative shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start px-[12px] py-[10px] relative w-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[10px] self-stretch shrink-0 w-[210.39px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="bg-[#3b82f6] h-[72px] shrink-0 w-full" data-name="Background" />
        <Background />
      </div>
      <div aria-hidden="true" className="absolute border border-[#2e2e2e] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ededed] text-[13px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Success</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">#10B981</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#1a1a1a] relative shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start px-[12px] py-[10px] relative w-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="relative rounded-[10px] self-stretch shrink-0 w-[210.41px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="bg-[#10b981] h-[72px] shrink-0 w-full" data-name="Background" />
        <Background1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#2e2e2e] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ededed] text-[13px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Error</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">#EF4444</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#1a1a1a] relative shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start px-[12px] py-[10px] relative w-full">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="relative rounded-[10px] self-stretch shrink-0 w-[210.39px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="bg-[#ef4444] h-[72px] shrink-0 w-full" data-name="Background" />
        <Background2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#2e2e2e] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ededed] text-[13px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Warning</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">#F59E0B</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#1a1a1a] relative shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start px-[12px] py-[10px] relative w-full">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Border3() {
  return (
    <div className="relative rounded-[10px] self-stretch shrink-0 w-[210.41px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="bg-[#f59e0b] h-[72px] shrink-0 w-full" data-name="Background" />
        <Background3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#2e2e2e] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-start justify-center pr-[222.4px] relative size-full">
          <Border />
          <Border1 />
          <Border2 />
          <Border3 />
        </div>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[8px] relative size-full" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}