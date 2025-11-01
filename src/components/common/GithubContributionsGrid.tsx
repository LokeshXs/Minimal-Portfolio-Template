import { getGithubMonthsAndContributions } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { format } from "date-fns";
import { fetchContributions } from "@/actions/github";

export type githubResponseType = {
  contributionDays: {
    date: string;
    contributionCount: number;
  }[];
}[];

export default async function GithubContributionsGrid() {
  const response = await fetchContributions();

  if ("error" in response) {
    return <div>Add Github Access Token to fetch data</div>;
  }

  const weeks = response;
  const { result: months, totalContributions } =
    getGithubMonthsAndContributions(weeks);

  return (
    <div className="border-muted bg-muted/40 w-full rounded-md border border-dashed p-2">
      {/* Make grid auto-fit to available space */}
      <div className="overflow-x-auto">
        <div className="min-w-[600px]">
          <div className="flex justify-around gap-2">
            {months.map((month, i) => (
              <p key={`${i}-${month}`} className="text-sm max-sm:text-xs">
                {month}
              </p>
            ))}
          </div>

          <div
            className="mt-2 grid h-full w-full gap-[2px] max-sm:mb-1"
            style={{
              gridTemplateColumns: `repeat(${weeks.length}, 1fr)`,
            }}
          >
            {weeks.map((week, i) => (
              <div key={`week-${i}`} className="flex flex-col gap-1">
                {week.contributionDays.map((day, j) => (
                  <Tooltip key={`week-${i}-day-${j}`}>
                    <TooltipTrigger>
                      <div
                        className="aspect-square rounded-[2px] transition hover:opacity-80"
                        style={{
                          backgroundColor: getColor(day.contributionCount),
                        }}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        {" "}
                        {day.contributionCount === 0
                          ? `No contributions on ${format(day.date, "do-MMM-yyyy")}`
                          : `${day.contributionCount} contributions on ${format(day.date, "do-MMM-yyyy")}`}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 flex justify-between max-sm:mt-1 max-sm:flex-col-reverse max-sm:items-center max-sm:gap-1">
        <div>
          <p className="text-sm max-sm:text-xs">
            Total: <span className="font-medium">{totalContributions}</span>{" "}
            contributions
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xs">Less</p>
          <div className="flex items-center gap-[2px]">
            <span
              title="No Contributions"
              className="inline-block h-3 w-3 rounded-[2px] bg-[#ffedd5] max-sm:h-2 max-sm:w-2"
            />
            <span
              title="More than 0"
              className="inline-block h-3 w-3 rounded-[2px] bg-[#fdba74] max-sm:h-2 max-sm:w-2"
            />
            <span
              title="More than 2"
              className="inline-block h-3 w-3 rounded-[2px] bg-[#f97316] max-sm:h-2 max-sm:w-2"
            />
            <span
              title="More than 5"
              className="inline-block h-3 w-3 rounded-[2px] bg-[#ea580c] max-sm:h-2 max-sm:w-2"
            />
            <span
              title="More than 10"
              className="inline-block h-3 w-3 rounded-[2px] bg-[#c2410c] max-sm:h-2 max-sm:w-2"
            />
          </div>
          <p className="text-xs">More</p>
        </div>
      </div>
    </div>
  );
}

function getColor(count: number) {
  if (count === 0) return "#ffedd5";
  if (count <= 2) return "#fdba74";
  if (count <= 5) return "#f97316";
  if (count <= 10) return "#ea580c";
  return "#c2410c";
}
