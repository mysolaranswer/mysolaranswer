import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";

export function WireSizeGuide() {
  return (
    <RevealOnScroll className="mb-24">
      <article className="prose max-w-3xl mx-auto prose-headings:font-heading prose-h2:text-3xl prose-h2:text-[var(--color-navy)] prose-h2:mb-6 prose-h3:text-xl prose-h3:text-[var(--color-navy)] prose-p:font-body prose-p:text-[var(--text-body)] prose-p:leading-relaxed prose-p:mb-6 prose-a:text-[var(--color-amber)] prose-li:font-body prose-li:text-[var(--text-body)] prose-ul:mb-8">
        <h2>How to Use This Calculator</h2>
        <p>
          Determining the correct wire size is as simple as 1-2-3:
        </p>
        <ol>
          <li><strong>System Voltage:</strong> Enter the DC voltage of your system (e.g., 12V, 24V, 48V).</li>
          <li><strong>Max Current (Amps):</strong> Enter the total maximum amps that will pass through the wire. For a solar array, this is the short-circuit current (Isc) multiplied by 1.56.</li>
          <li><strong>One-Way Distance:</strong> Enter the physical distance (in feet) between your components.</li>
        </ol>
        <p>The calculator will instantly determine the correct AWG gauge to keep your voltage drop under the safe threshold.</p>

        <h2>Why Solar Wire Sizing Matters</h2>
        <p>
          When setting up a solar panel system, the cables act as the highways for your electricity. If you use a solar wire size that is too thin (a high AWG number), it creates resistance. This resistance leads to two major problems:
        </p>
        <ul>
          <li><strong>Voltage Drop:</strong> Energy is lost as heat before it ever reaches your charge controller or battery.</li>
          <li><strong>Fire Hazards:</strong> Forcing too much current through a thin wire causes overheating, which can melt insulation and cause fires.</li>
        </ul>

        <h2>Understanding Voltage Drop Risks</h2>
        <p>
          In DC (Direct Current) solar systems, voltage drop is a significant hurdle. If you have a 12V system and lose 1V through the wires, you've lost nearly 8% of your power. For critical runs (like between the charge controller and battery), you should aim for a maximum voltage drop of 1% to 2%. For standard solar panel wiring runs, 3% is acceptable. Our solar string calculator logic automatically checks these thresholds for you.
        </p>

        <h2>Series vs. Parallel Wiring Impact</h2>
        <p>
          How you wire your panels drastically impacts your required solar cable size:
        </p>
        <ul>
          <li><strong>Series Wiring:</strong> Increases voltage but keeps amps (current) the same. Higher voltage pushes through thinner wire more easily, meaning you can use a smaller gauge over longer distances.</li>
          <li><strong>Parallel Wiring:</strong> Keeps voltage the same but increases amps. High amps require a much thicker wire gauge to prevent overheating.</li>
        </ul>
      </article>
    </RevealOnScroll>
  );
}
