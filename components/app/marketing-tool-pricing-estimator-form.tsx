import { type UseFormReturn } from "react-hook-form"

import { type PricingEstimatorValues } from "@/config/schemas"

import { Icons } from "@/components/shared/icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Slider } from "@/components/ui/slider"

interface EstimatorFormProps {
  form: UseFormReturn<PricingEstimatorValues>
  featureOptions: Array<{ id: string; label: string }>
  isCalculating: boolean
  onFeatureToggle: (id: string) => void
  onSubmit: (values: PricingEstimatorValues) => void
}

export function MarketingToolPricingEstimatorForm({
  form,
  featureOptions,
  isCalculating,
  onFeatureToggle,
  onSubmit,
}: EstimatorFormProps) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="mb-4">
          <h3 className="font-medium">Enterprise Chatbot Solution</h3>
          <p className="text-muted-foreground text-sm">
            Configure your chatbot&apos;s complexity, timeframe, and features
          </p>
        </div>

        <FormField
          control={form.control}
          name="complexity"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel>Solution Complexity</FormLabel>
                <span className="text-muted-foreground text-sm">
                  {field.value < 30
                    ? "Simple"
                    : field.value < 70
                      ? "Moderate"
                      : "Complex"}
                </span>
              </div>
              <FormControl>
                <Slider
                  value={[field.value]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(values) => field.onChange(values[0])}
                  className="py-4"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="timeframe"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel>Timeframe</FormLabel>
                <span className="text-muted-foreground text-sm">
                  {field.value < 30
                    ? "Urgent"
                    : field.value < 70
                      ? "Standard"
                      : "Relaxed"}
                </span>
              </div>
              <FormControl>
                <Slider
                  value={[field.value]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(values) => field.onChange(values[0])}
                  className="py-4"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="selectedFeatures"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Features</FormLabel>
              <div className="mt-2 flex flex-wrap gap-2">
                {featureOptions.map((feature) => (
                  <Badge
                    key={feature.id}
                    variant={
                      field.value.includes(feature.id) ? "default" : "outline"
                    }
                    className="cursor-pointer"
                    onClick={() => onFeatureToggle(feature.id)}
                  >
                    {feature.label}
                  </Badge>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isCalculating} className="w-full">
          {isCalculating ? (
            <>
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              Calculating...
            </>
          ) : (
            <>
              <Icons.calculator className="mr-2 h-4 w-4" />
              Calculate Estimate
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}
